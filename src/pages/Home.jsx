
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// function Home() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <section id="home" className="page-placeholder">
//           <h1>Home Section</h1>
//           <p>Your video editor portfolio starts here.</p>
//         </section>

//         <section id="portfolio" className="page-placeholder">
//           <h2>Portfolio Section</h2>
//         </section>

//         <section id="about" className="page-placeholder">
//           <h2>About Section</h2>
//         </section>

//         <section id="contact" className="page-placeholder">
//           <h2>Contact Section</h2>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default Home;













import About from '../sections/About';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';
import Skills from '../sections/Skills';
import Education from '../sections/Education.jsx';


function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
    

        <Portfolio/>
        <About/>
        <Education />
        <Skills />
        <Contact />



        {/* <section id="portfolio" className="page-placeholder">
          <h2>My Portfolio</h2>
          <Portfolio/>
        </section> */}

        {/* <section id="about" className="page-placeholder">
          <h2>About Me</h2>
          <About/>
        </section> */}

        {/* <section id="contact" className="page-placeholder">
          <h2>Let's Work Together</h2>
          <p>Have a project? Get in touch with me.</p>
        </section> */}
      </main>

      <Footer />
    </>
  );
}

export default Home;
