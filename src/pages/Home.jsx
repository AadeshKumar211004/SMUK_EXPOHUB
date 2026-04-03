import React, { useEffect } from 'react'
import About from "../components/About";
import Catalogue from "../components/Catalogue";
import Contact from "../components/ContactForm";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Mission from '../components/Mission';
import { useLocation } from 'react-router-dom';

function Home() {

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);

      if (section) {
        setTimeout(() => {
          const yOffset = -90; // 🔥 FIXED OFFSET
          const y =
            section.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <div id="home"><Hero /></div>
      <div id="about"><About/></div>
      <div id="catalogue"><Catalogue /></div>
      <div id='mission'><Mission/></div>
      <div id="faq"><FAQ /></div>
      <div id="contact"><Contact /></div>
    </div>
  )
}

export default Home;