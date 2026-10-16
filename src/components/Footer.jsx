
// import {
//   FaYoutube,
//   FaInstagram,
//   FaLinkedinIn,
//   FaArrowUp,
// } from 'react-icons/fa';
// import '../css/Footer.css';

// function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="portfolio-footer">
//       <div className="footer-container">
//         <a href="#home" className="footer-logo">
//           EDITOR<span>.</span>
//         </a>

//         <p className="footer-message">
//           Turning ideas into engaging visual stories.
//         </p>

//         <div className="footer-socials">
//           <a
//             href="https://www.youtube.com/"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="YouTube"
//           >
//             <FaYoutube />
//           </a>

//           <a
//             href="https://www.instagram.com/"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="Instagram"
//           >
//             <FaInstagram />
//           </a>

//           <a
//             href="https://www.linkedin.com/"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="LinkedIn"
//           >
//             <FaLinkedinIn />
//           </a>
//         </div>

//         <div className="footer-bottom">
//           <p>© {currentYear} Video Editor Portfolio. All rights reserved.</p>

//           <a href="#home" className="footer-back-top">
//             Back to top <FaArrowUp />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;





import {
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaArrowUp,
} from 'react-icons/fa';

import '../css/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Tech World Hindi YouTube',
      url: 'https://www.youtube.com/@Tech_World_Hindi',
      icon: <FaYoutube />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ripukesh___sharma?vrfl=d3owaG91aWs4OHhm',
      icon: <FaInstagram />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ripukesh-kumar-376207281?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      icon: <FaLinkedinIn />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Ripukesh870',
      icon: <FaGithub />,
    },
  ];

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <a href="#home" className="footer-logo">
          EDITOR<span>.</span>
        </a>

        <p className="footer-message">
          Turning ideas into engaging visual stories.
        </p>

        <div className="footer-socials">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Video Editor Portfolio. All rights reserved.
          </p>

          <a href="#home" className="footer-back-top">
            Back to top <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
