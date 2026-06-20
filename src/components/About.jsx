import Image from "next/image";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden border-t border-white/10 px-6 py-32"
    >
      <div className="absolute inset-0">
        <Image
          src="/visuals/about/legacy-temple-final.png"
          alt="Legacy Temple"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030407] via-[#030407]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030407] via-transparent to-[#030407]" />

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center">
        <div className="max-w-2xl">
          <SectionLabel
            label="About Me"
            title="It's not about me. It's about legacy."
          />

          <p className="mt-6 text-lg leading-8 text-white/60">
            This is not about fame.
            It is not about followers.
            It is not even about success.
          </p>

          <p className="mt-4 text-lg leading-8 text-white/60">
            It's about building things that continue to exist
            long after I am gone.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-100"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}