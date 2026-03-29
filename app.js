import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Reveal Animation [cite: 23]
      gsap.from(".hero-content", { opacity: 0, y: 50, duration: 1.5 });

      // 2. Parallax & Scroll Animations 
      const sections = gsap.utils.toArray('.section');
      sections.forEach((section) => {
        gsap.from(section.querySelector('.content'), {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 100,
          duration: 1
        });
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="container">
      {/* SECTION 1: HERO (Sunlight Zone)  */}
      <section className="section hero">
        <div className="hero-content">
          <h1>Ocean Depths</h1>
          <p>Scroll down to begin your descent into the blue.</p>
        </div>
      </section>

      {/* SECTION 2: THE TWILIGHT ZONE  */}
      <section className="section twilight">
        <div className="content">
          <h2>The Twilight Zone</h2>
          <p>At 200m, sunlight begins to fade. Strange creatures start to appear.</p>
          <div className="interactive-card">Hover to Explore [cite: 22]</div>
        </div>
      </section>

      {/* SECTION 3: THE MIDNIGHT ZONE  */}
      <section className="section midnight">
        <div className="content">
          <h2>The Midnight Zone</h2>
          <p>1,000m deep. The only light here comes from bioluminescence.</p>
        </div>
      </section>

      {/* SECTION 4: THE ABYSS  */}
      <section className="section abyss">
        <div className="content">
          <h2>The Abyss</h2>
          <p>4,000m deep. The water is near freezing and the pressure is crushing.</p>
        </div>
      </section>

      {/* SECTION 5: THE TRENCH (Conclusion)  */}
      <section className="section trench">
        <div className="content">
          <h2>The Challenger Deep</h2>
          <p>You have reached the bottom. The story ends in the dark.</p>
        </div>
      </section>
    </main>
  );
}

export default App;
