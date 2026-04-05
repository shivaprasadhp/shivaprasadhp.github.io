import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClientInit from './components/ClientInit';

export default function Home() {
  return (
    <>
      <ClientInit />
      <Navbar />
      <main>
        <Hero />
        <div className="container"><hr className="section-divider" /></div>
        <Projects />
        <div className="container"><hr className="section-divider" /></div>
        <Skills />
        <div className="container"><hr className="section-divider" /></div>
        <Experience />
        <div className="container"><hr className="section-divider" /></div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
