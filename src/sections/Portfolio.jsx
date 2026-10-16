

import { useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import projects from '../data/projects.js';
// import './Portfolio.css';

import '../css/Portfolio.css';

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    '2D Animation',
    '3D Animation',
    'Informative Videos',
    'Video Editing',
    'Documentary',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-heading">
          <span className="section-eyebrow">MY SELECTED WORK</span>

          <h2>
            Projects That <span>Speak for Me.</span>
          </h2>

          <p>
            A collection of animation, editing and storytelling
            projects created for digital platforms.
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category ? 'active' : ''
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="portfolio-empty">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
