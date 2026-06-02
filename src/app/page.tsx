import Navbar from "@/components/navbar";
import GradientBg from "@/components/gradient-bg";
import AnimatedCursor from "@/components/animated-cursor";
import ThemeToggle from "@/components/theme-toggle";
import Hero from "@/sections/hero";
import About from "@/sections/about";
import Projects from "@/sections/projects";
import Experience from "@/sections/experience";
import Skills from "@/sections/skills";
import Contact from "@/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <GradientBg />
      <AnimatedCursor />
      <Navbar />
      <ThemeToggle />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
