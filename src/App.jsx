
// import { useState } from 'react'
// import { FaPlay, FaVideo, FaFilm, FaClapperboard, FaEnvelope, FaArrowRight } from 'react-icons/fa6'
// import './App.css'

// const projects = [
//   {
//     id: 1,
//     title: '2D Animation Story',
//     category: '2D Animation',
//     description: 'Story-based animation editing with dialogue, sound effects and music.',
//     thumbnail: '',
//     link: '',
//   },
//   {
//     id: 2,
//     title: '3D Cartoon Video',
//     category: '3D Animation',
//     description: '3D cartoon storytelling with scene transitions and audio design.',
//     thumbnail: '',
//     link: '',
//   },
//   {
//     id: 3,
//     title: 'Informative YouTube Video',
//     category: 'Informative',
//     description: 'Informational video editing with text, visuals and background music.',
//     thumbnail: '',
//     link: '',
//   },
// ]

// const categories = ['All Projects', '2D Animation', '3D Animation', 'Informative']

// function App() {
//   const [activeCategory, setActiveCategory] = useState('All Projects')

//   const filteredProjects =
//     activeCategory === 'All Projects'
//       ? projects
//       : projects.filter((project) => project.category === activeCategory)

//   return (
//     <div className="portfolio">
//       <nav className="navbar navbar-expand-lg navbar-dark portfolio-nav">
//         <div className="container">
//           <a className="navbar-brand fw-bold" href="#home">
//             R<span className="accent">K.</span>
//           </a>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#portfolioNavbar"
//             aria-controls="portfolioNavbar"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>

//           <div className="collapse navbar-collapse" id="portfolioNavbar">
//             <div className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
//               <a className="nav-link" href="#home">Home</a>
//               <a className="nav-link" href="#work">Portfolio</a>
//               <a className="nav-link" href="#about">About</a>
//               <a className="nav-link" href="#contact">Contact</a>
//               <a className="btn btn-accent ms-lg-2" href="#work">View My Work</a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main>
//         <section className="hero-section" id="home">
//           <div className="container">
//             <div className="row align-items-center g-5">
//               <div className="col-lg-7">
//                 <p className="eyebrow"><span /> VIDEO EDITOR & VISUAL STORYTELLER</p>
//                 <h1>
//                   I Turn Ideas Into
//                   <br />
//                   <span className="accent">Powerful Videos.</span>
//                 </h1>
//                 <p className="hero-description">
//                   Hi, I'm Ripukesh Kumar. I edit engaging YouTube videos,
//                   animation stories and informative content with a focus on
//                   storytelling, pacing and sound.
//                 </p>

//                 <div className="d-flex flex-wrap gap-3 mt-4">
//                   <a className="btn btn-accent btn-lg" href="#work">
//                     Explore My Work <FaArrowRight className="ms-2" />
//                   </a>
//                   <a className="btn btn-outline-light btn-lg" href="#contact">
//                     <FaEnvelope className="me-2" /> Contact Me
//                   </a>
//                 </div>

//                 <div className="hero-tags">
//                   <span>DaVinci Resolve</span>
//                   <span>Premiere Pro</span>
//                   <span>YouTube Editing</span>
//                 </div>
//               </div>

//               <div className="col-lg-5">
//                 <div className="hero-visual">
//                   <div className="visual-glow" />
//                   <div className="editor-window">
//                     <div className="window-top">
//                       <span /><span /><span />
//                       <small>VIDEO_EDITING_PROJECT</small>
//                     </div>
//                     <div className="preview-screen">
//                       <div className="preview-circle"><FaPlay /></div>
//                       <div className="preview-label">YOUR STORY. YOUR VISION.</div>
//                     </div>
//                     <div className="timeline">
//                       <div className="timeline-label">TIMELINE</div>
//                       <div className="timeline-track"><span /></div>
//                       <div className="timeline-track second"><span /></div>
//                       <div className="timeline-track third"><span /></div>
//                     </div>
//                   </div>
//                   <div className="floating-card">
//                     <FaClapperboard />
//                     <div><strong>Creative Editing</strong><small>Every frame matters</small></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="services-strip">
//           <div className="container">
//             <div className="row g-3">
//               <div className="col-md-4">
//                 <div className="service-item"><FaFilm /><span>2D Animation</span></div>
//               </div>
//               <div className="col-md-4">
//                 <div className="service-item"><FaVideo /><span>3D Animation</span></div>
//               </div>
//               <div className="col-md-4">
//                 <div className="service-item"><FaClapperboard /><span>Informative Videos</span></div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="work-section section-padding" id="work">
//           <div className="container">
//             <div className="section-heading">
//               <p className="eyebrow">MY SELECTED WORK</p>
//               <h2>Creative Work, <span className="accent">Real Stories.</span></h2>
//               <p>Explore my work by category. More projects will be added as the portfolio grows.</p>
//             </div>

//             <div className="category-filters">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   type="button"
//                   className={`category-button ${activeCategory === category ? 'active' : ''}`}
//                   onClick={() => setActiveCategory(category)}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>

//             <div className="row g-4">
//               {filteredProjects.map((project) => (
//                 <div className="col-md-6 col-lg-4" key={project.id}>
//                   <article className="project-card">
//                     <div className="project-thumbnail">
//                       {project.thumbnail ? (
//                         <img src={project.thumbnail} alt={project.title} />
//                       ) : (
//                         <div className="thumbnail-placeholder">
//                           <FaPlay />
//                           <span>ADD YOUR VIDEO THUMBNAIL</span>
//                         </div>
//                       )}
//                       <span className="project-category">{project.category}</span>
//                     </div>
//                     <div className="project-content">
//                       <h3>{project.title}</h3>
//                       <p>{project.description}</p>
//                       {project.link ? (
//                         <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
//                           Watch Project <FaArrowRight />
//                         </a>
//                       ) : (
//                         <span className="project-link pending-link">Video link to be added</span>
//                       )}
//                     </div>
//                   </article>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="about-section section-padding" id="about">
//           <div className="container">
//             <div className="row g-5 align-items-center">
//               <div className="col-lg-5">
//                 <div className="about-art">
//                   <div className="about-art-inner">
//                     <FaClapperboard />
//                     <span>IDEA</span><span className="art-line" />
//                     <span>EDIT</span><span className="art-line" />
//                     <span>IMPACT</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-7">
//                 <p className="eyebrow">A LITTLE ABOUT ME</p>
//                 <h2>Editing Is More Than Cutting Clips.</h2>
//                 <p className="about-copy">
//                   I'm Ripukesh Kumar, a video editor interested in creating
//                   engaging stories for digital audiences. My work includes
//                   animation-based storytelling, 3D cartoon videos and
//                   informative YouTube content.
//                 </p>
//                 <p className="about-copy">
//                   I focus on clean cuts, suitable music, sound effects,
//                   readable text and smooth pacing to help every video communicate
//                   its message clearly.
//                 </p>
//                 <div className="skill-list">
//                   <span>Video Editing</span><span>Sound Design</span>
//                   <span>Storytelling</span><span>Text & Visuals</span>
//                   <span>DaVinci Resolve</span><span>Premiere Pro</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="contact-section section-padding" id="contact">
//           <div className="container">
//             <div className="contact-panel">
//               <p className="eyebrow">LET'S WORK TOGETHER</p>
//               <h2>Have a Video Project in Mind?</h2>
//               <p>Let's discuss how I can help bring your next video to life.</p>
//               <a className="btn btn-accent btn-lg" href="mailto:ripukesh870@gmail.com">
//                 <FaEnvelope className="me-2" /> Email Me
//               </a>
//               <p className="contact-email">ripukesh870@gmail.com</p>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="portfolio-footer">
//         <div className="container d-flex flex-wrap justify-content-between gap-2">
//           <span>© {new Date().getFullYear()} Ripukesh Kumar</span>
//           <span>Video Editor · Visual Storyteller</span>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default App











import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
