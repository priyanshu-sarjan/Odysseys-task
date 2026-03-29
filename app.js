import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Hero Fade-in (Animation 1)
      gsap.from(".hero-content", { opacity: 0, y: 50, duration: 1.5 });

      // 2. Parallax and Reveal Effects (Scroll Interaction)
      const sections = gsap.utils.toArray('.section');
      sections.forEach((section) => {
        gsap.from(section.querySelector('.content'), {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 60,
          duration: 1.2,
          ease: "power2.out"
        });
      });

      // 3. Background Color Transition (Depth Animation)
      gsap.to(".container", {
        scrollTrigger: {
          trigger: ".container",
          start: "top top",
          end: "bottom bottom",
          scrub: true
        },
        backgroundColor: "#00050a" // Deepest black at the bottom
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="container">
      {/* SECTION 1: HERO (Sunlight Zone) */}
      <section className="section sunlight">
        <div className="hero-content">
          <h1 className="glitch">0m: Sunlight Zone</h1>
          <p>The journey into the abyss begins here.</p>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION (Twilight Zone) */}
      <section className="section twilight">
        <div className="content">
          <h2>200m: The Twilight Zone</h2>
          <p>Light begins to fail. Photosynthesis is no longer possible.</p>
          <div className="interactive-card">Explore Marine Snow</div>
        </div>
      </section>

      {/* SECTION 3: EXPLORATION (Midnight Zone) */}
      <section className="section midnight">
        <div className="content">
          <h2>1,000m: The Midnight Zone</h2>
          <p>The only light here is produced by the creatures themselves.</p>
          <div className="biolum-trigger">Activate Bioluminescence</div>
        </div>
      </section>

      {/* SECTION 4: INSIGHT (The Abyss) */}
      <section className="section abyss">
        <div className="content">
          <h2>4,000m: The Abyssal Zone</h2>
          <p>Freezing temperatures and immense pressure define this realm.</p>
        </div>
      </section>

      {/* SECTION 5: CONCLUSION (The Trench) */}
      <section className="section trench">
        <div className="content">
          <h2>11,000m: The Hadal Zone</h2>
          <p>You have reached the Challenger Deep. Silence reigns.</p>
        </div>
      </section>
    </main>
  );
}

export default App;
