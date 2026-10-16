
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../css/Navbar.css';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setMenuOpen(false);
  };

  return (
    <nav className="portfolio-navbar">
      <div className="navbar-container">
        <a
          href="#home"
          className="navbar-logo"
          onClick={(event) => {
            event.preventDefault();
            handleNavigation('home');
          }}
        >
          EDITOR<span>.</span>
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => {
                event.preventDefault();
                handleNavigation(item.id);
              }}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="navbar-hire-button"
            onClick={(event) => {
              event.preventDefault();
              handleNavigation('contact');
            }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;






// import { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import '../css/Navbar.css';

// const navItems = [
//   { label: 'Home', id: 'home' },
//   { label: 'Portfolio', id: 'portfolio' },
//   { label: 'About', id: 'about' },
//   { label: 'Skills', id: 'skills' },
//   { label: 'Contact', id: 'contact' },
// ];

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleNavigation = (id) => {
//     document.getElementById(id)?.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     });

//     setMenuOpen(false);
//   };

//   return (
//     <nav className="portfolio-navbar">
//       <div className="navbar-container">
//         <a
//           href="#home"
//           className="navbar-logo"
//           onClick={(event) => {
//             event.preventDefault();
//             handleNavigation('home');
//           }}
//         >
//           Ripukesh Kumar<span>.</span>
//         </a>

//         <button
//           className="navbar-toggle"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle navigation menu"
//           aria-expanded={menuOpen}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
//           {navItems.map((item) => (
//             <a
//               key={item.id}
//               href={`#${item.id}`}
//               onClick={(event) => {
//                 event.preventDefault();
//                 handleNavigation(item.id);
//               }}
//             >
//               {item.label}
//             </a>
//           ))}

//           <a
//             href="#contact"
//             className="navbar-hire-button"
//             onClick={(event) => {
//               event.preventDefault();
//               handleNavigation('contact');
//             }}
//           >
//             Hire Me
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;