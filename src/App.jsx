import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Github from "./components/Github/Github";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { metrics } from "./data/portfolio";
import { Reveal } from "./components/shared/Reveal";

export default function App() {
  useEffect(() => {
    const handlePointerMove = (e) => {
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-surface pt-16">
        {/* Subtle Ambient Radial Illumination */}
        <div
          className="pointer-events-none fixed inset-x-0 top-0 -z-0 h-[520px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-15%,rgb(var(--color-primary)/0.12),transparent)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-portfolio flex-col px-margin-mobile md:px-space-xl lg:px-margin-desktop">
          <Reveal>
            <Hero />
          </Reveal>

          {/* Architectural Engineering Telemetry Strip */}
          <Reveal>
            <section aria-label="Engineering metrics" className="pb-space-xl">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {metrics.map(([value, label, detail], idx) => (
                  <div
                    key={label}
                    className="card flex flex-col justify-between gap-1.5 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-outline">
                        0{idx + 1} // {label}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </div>
                    <strong className="font-headline text-headline-md text-on-surface md:text-headline-lg">
                      {value}
                    </strong>
                    {detail && (
                      <span className="font-body text-body-sm text-on-surface-variant">
                        {detail}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <About />
          </Reveal>

          <Reveal>
            <Services />
          </Reveal>

          <Reveal>
            <Projects />
          </Reveal>

          <Reveal>
            <Skills />
          </Reveal>

          <Reveal>
            <Experience />
          </Reveal>

          <Reveal>
            <Education />
          </Reveal>

          <Reveal>
            <Github />
          </Reveal>

          <Reveal>
            <Contact />
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
