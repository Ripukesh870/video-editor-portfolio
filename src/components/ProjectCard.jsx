// //ProductCard.js

// import { FaPlay } from 'react-icons/fa';
// import '../css/ProjectCard.css';

// function ProjectCard({ project }) {
//   return (
//     <article className="project-card">
//       <div className="project-thumbnail">
//         {project.image ? (
//           <img
//             src={project.image}
//             alt={project.title}
//             loading="lazy"
//           />
//         ) : (
//           <div className="thumbnail-placeholder">
//             <span>{project.category}</span>
//           </div>
//         )}

//         <a
//           href={project.videoUrl || '#'}
//           target={project.videoUrl ? '_blank' : undefined}
//           rel={project.videoUrl ? 'noreferrer' : undefined}
//           className="project-play-button"
//           aria-label={`Watch ${project.title}`}
//           onClick={(event) => {
//             if (!project.videoUrl) event.preventDefault();
//           }}
//         >
//           <FaPlay />
//         </a>
//       </div>

//       <div className="project-info">
//         <span className="project-category">
//           {project.category}
//         </span>

//         <h3>{project.title}</h3>

//         <p>{project.description}</p>
//       </div>
//     </article>
//   );
// }

// export default ProjectCard;










import { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import '../css/ProjectCard.css';

function getYouTubeId(url = '') {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([\w-]{11})/
  );

  return match ? match[1] : '';
}

function ProjectCard({ project }) {
  const videoId = getYouTubeId(project.videoUrl);
  const [title, setTitle] = useState(project.title);
  const [thumbnail, setThumbnail] = useState(project.image || '');
  
  useEffect(() => {
    if (!videoId) return;

    // Thumbnail URL video ID se banega
    if (!project.image) {
      setThumbnail(
        `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      );
    }

    // YouTube se video title laane ki koshish
    const metadataUrl =
      `https://www.youtube.com/oembed?url=${encodeURIComponent(
        project.videoUrl
      )}&format=json`;

    fetch(metadataUrl)
      .then((response) => {
        if (!response.ok) throw new Error('Title fetch failed');
        return response.json();
      })
      .then((data) => {
        if (data.title) setTitle(data.title);
        if (data.thumbnail_url && !project.image) {
          setThumbnail(data.thumbnail_url);
        }
      })
      .catch(() => {
        // Agar title fetch nahi hua, project.js wala title rahega
      });
  }, [videoId, project.videoUrl, project.image, project.title]);

  return (
    <article className="project-card">
      <div className="project-thumbnail">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            loading="lazy"
            onError={() => setThumbnail('')}
          />
        ) : (
          <div className="thumbnail-placeholder">
            <span>{project.category}</span>
          </div>
        )}

        <a
          href={project.videoUrl || '#'}
          target={project.videoUrl ? '_blank' : undefined}
          rel={project.videoUrl ? 'noopener noreferrer' : undefined}
          className="project-play-button"
          aria-label={`Watch ${title}`}
          onClick={(event) => {
            if (!project.videoUrl) event.preventDefault();
          }}
        >
          <FaPlay />
        </a>
      </div>

      <div className="project-info">
        <span className="project-category">
          {project.category}
        </span>

        <h3>{title}</h3>

        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
