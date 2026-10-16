
import {
  FaFilm,
  FaScissors,
  FaPalette,
  FaVolumeHigh,
  FaClapperboard,
  FaDesktop,
} from 'react-icons/fa6';

import '../css/Skills.css';

function Skills() {
  const skills = [
    {
      icon: <FaScissors />,
      title: 'Video Editing',
      description:
        'Cutting, trimming, transitions, pacing and timeline editing for YouTube videos.',
      tools: 'DaVinci Resolve, Premiere Pro',
    },
    {
      icon: <FaFilm />,
      title: '2D Animation',
      description:
        'Animated stories, character scenes and engaging visual storytelling.',
      tools: '2D Animation Workflow',
    },
    {
      icon: <FaClapperboard />,
      title: '3D Animation',
      description:
        '3D cartoon scenes, character dialogue and scene-based storytelling.',
      tools: 'Muvizu, Blender',
    },
    {
      icon: <FaVolumeHigh />,
      title: 'Audio & Sound Design',
      description:
        'Background music, sound effects, voice synchronization and volume balancing.',
      tools: 'Audio Editing',
    },
    {
      icon: <FaPalette />,
      title: 'Titles & Captions',
      description:
        'Titles, subtitles, text overlays and basic motion graphics.',
      tools: 'Video Graphics',
    },
    {
      icon: <FaDesktop />,
      title: 'YouTube Content',
      description:
        'Long-form videos, informative content and documentary-style storytelling.',
      tools: 'Editing & Storytelling',
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-heading">
          <span className="section-eyebrow">
            WHAT I CAN DO
          </span>

          <h2>
            Skills & <span>Software.</span>
          </h2>

          <p>
            Creative skills and editing techniques I use to
            turn ideas into engaging video content.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="expertise-card" key={skill.title}>
              <div className="expertise-icon">
                {skill.icon}
              </div>

              <h3>{skill.title}</h3>

              <p>{skill.description}</p>

              <div className="expertise-tools">
                {skill.tools}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
