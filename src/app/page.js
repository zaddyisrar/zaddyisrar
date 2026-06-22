import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/motion/ScrollSection";
import SectionBridge from "@/components/motion/SectionBridge";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030407] text-white">
      <Navbar />

      <ScrollSection depth="deep">
        <Hero />
      </ScrollSection>

      <SectionBridge />

      <ScrollSection depth="normal">
        <Skills />
      </ScrollSection>

      <SectionBridge />

      <ScrollSection depth="deep">
        <Projects />
      </ScrollSection>

      <SectionBridge />

      <ScrollSection depth="soft">
        <About />
      </ScrollSection>

      <SectionBridge />

      <ScrollSection depth="normal">
        <Contact />
      </ScrollSection>

      <Footer />
    </main>
  );
}