
// import {
//   FaVideo,
//   FaFilm,
//   FaDesktop,
//   FaScissors,
// } from 'react-icons/fa6';

// import '../css/About.css';

// function About() {
//   const skills = [
//     {
//       icon: <FaVideo />,
//       title: 'Video Editing',
//       description: 'YouTube videos, cuts, transitions and pacing.',
//     },
//     {
//       icon: <FaFilm />,
//       title: '2D & 3D Animation',
//       description: 'Animated stories, cartoon scenes and dialogues.',
//     },
//     {
//       icon: <FaDesktop />,
//       title: 'Visual Storytelling',
//       description: 'Turning ideas into engaging video content.',
//     },
//     {
//       icon: <FaScissors />,
//       title: 'Post Production',
//       description: 'Sound effects, music and visual refinement.',
//     },
//   ];

//   return (
//     <section id="about" className="about-section">
//       <div className="about-container">
//         <div className="about-heading">
//           <span className="section-eyebrow">GET TO KNOW ME</span>
//           <h2>
//             Creative Mind.
//             <br />
//             <span>Visual Storyteller.</span>
//           </h2>
//         </div>

//         <div className="about-layout">
//           <div className="about-text">
//             <h3>Hi, I'm a Video Editor & Animation Creator.</h3>

//             <p>
//               I create engaging video content, animated stories
//               and visual experiences for digital platforms. My
//               focus is on clear storytelling, smooth editing and
//               keeping the audience interested.
//             </p>

//             <p>
//               From YouTube long-form videos to 2D and 3D cartoon
//               animation, I enjoy bringing ideas to life through
//               visuals, sound and creative editing.
//             </p>

//             <div className="about-note">
//               <span className="about-note-dot"></span>
//               Open to video editing and animation projects
//             </div>
//           </div>

//           <div className="about-skills">
//             {skills.map((skill) => (
//               <div className="skill-card" key={skill.title}>
//                 <div className="skill-icon">{skill.icon}</div>

//                 <div>
//                   <h4>{skill.title}</h4>
//                   <p>{skill.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;







import {
  FaVideo,
  FaFilm,
  FaDesktop,
  FaScissors,
} from 'react-icons/fa6';

import '../css/About.css';

function About() {
  const skills = [
    {
      icon: <FaVideo />,
      title: 'YouTube Video Editing',
      description:
        'Long-form videos, clean cuts, pacing and engaging storytelling.',
    },
    {
      icon: <FaFilm />,
      title: '2D & 3D Animation',
      description:
        'Animated stories, cartoon scenes, dialogues and visual sequences.',
    },
    {
      icon: <FaDesktop />,
      title: 'DaVinci Resolve & Premiere Pro',
      description:
        'Video editing, timeline workflow, transitions and visual presentation.',
    },
    {
      icon: <FaScissors />,
      title: 'Audio & Post Production',
      description:
        'Background music, sound effects, audio synchronization and volume balancing.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-heading">
          <span className="section-eyebrow">GET TO KNOW ME</span>

          <h2>
            Creative Mind.
            <br />
            <span>Visual Storyteller.</span>
          </h2>
        </div>

        <div className="about-layout">
          <div className="about-text">
            <h3>Hi, I'm Ripukesh Kumar.</h3>

            <p>
              I'm a Video Editor and Visual Storyteller focused on
              creating engaging YouTube content. I enjoy turning
              raw footage and creative ideas into videos with clear
              storytelling, smooth pacing and an engaging viewing experience.
            </p>

            <p>
              My creative work also includes 2D and 3D cartoon
              animation, informative videos and documentary-style
              storytelling. I work with video editing tools such as
              DaVinci Resolve and Premiere Pro to develop my editing
              skills and produce engaging content.
            </p>

            <div className="about-note">
              <span className="about-note-dot"></span>
              Open to Remote Video Editing Opportunities
            </div>
          </div>

          <div className="about-skills">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.title}>
                <div className="skill-icon">{skill.icon}</div>

                <div>
                  <h4>{skill.title}</h4>
                  <p>{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;