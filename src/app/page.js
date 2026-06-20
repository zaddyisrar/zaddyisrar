import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030407] text-white">
      <Navbar />

      <Hero />

      <MotionReveal>
        <Skills />
      </MotionReveal>

      <MotionReveal>
        <Projects />
      </MotionReveal>

      <MotionReveal>
        <About />
      </MotionReveal>

      <MotionReveal>
        <Contact />
      </MotionReveal>

      <Footer />
    </main>
  );
}