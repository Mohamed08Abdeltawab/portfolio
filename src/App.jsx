import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Github from "./components/Github/Github";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { metrics } from "./data/portfolio";
import { Reveal } from "./components/shared/Reveal";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface pt-16">
        <div className="relative mx-auto flex w-full max-w-portfolio flex-col overflow-hidden px-margin-mobile md:px-space-xl lg:px-margin-desktop">
          <div className="pointer-events-none absolute -right-10 -top-24 -z-0 h-96 w-96 rounded-full bg-secondary-container/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 top-48 -z-0 h-80 w-80 rounded-full bg-tertiary-fixed/20 blur-3xl" />
          <div className="relative z-10">
            <Reveal>
              <Hero />
            </Reveal>
            <Reveal>
              <section className="mb-space-2xl py-space-md">
                <div className="grid grid-cols-2 items-center gap-space-md rounded-xl bg-surface-container-lowest p-space-md text-center shadow-sm md:grid-cols-4 md:p-space-lg">
                  {metrics.map(([value, label]) => (
                    <div key={label} className="flex flex-col">
                      <strong className="font-headline text-headline-lg text-primary">
                        {value}
                      </strong>
                      <span className="font-body text-label-sm font-medium uppercase tracking-wider text-on-surface-variant">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
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
              <About />
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
        </div>
      </main>
      <Footer />
    </>
  );
}
