import Image from "next/image";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden border-t border-white/10 px-6 py-32"
    >
      <div className="absolute inset-0">
        <Image
          src="/visuals/projects/projects-planet-final.png"
          alt="Projects Planet"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030407] via-transparent to-[#030407]/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030407] via-transparent to-[#030407]" />

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center">
        <div className="max-w-2xl">
          <SectionLabel
            label="Projects"
            title="Every project is a world of its own."
          />

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
            Products. Systems. Stories. Businesses.
            Everything I build becomes part of a larger ecosystem.
          </p>
        </div>
      </div>

      {/* PROJECT CARDS COMING LATER */}
    </section>
  );
}