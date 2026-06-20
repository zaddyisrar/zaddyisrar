import Image from "next/image";
import Stat from "./Stat";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      <div className="absolute inset-0">
        <Image
          src="/visuals/blackhole/blackhole-final.png"
          alt="Blackhole"
          fill
          priority
          className="object-cover object-[65%_center]"
        />
      </div>

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030407] via-[#030407]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030407] via-transparent to-[#030407]/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-cyan-200 backdrop-blur-md">
            Founder • Builder • Creator
          </div>

          <h1 className="text-6xl font-black uppercase leading-[0.85] tracking-[-0.08em] text-white sm:text-7xl md:text-8xl xl:text-9xl">
            Zaddy
            <span className="block text-white/35">Israr</span>
          </h1>

          <p className="mt-7 text-3xl font-semibold uppercase leading-tight tracking-[-0.04em] text-white md:text-5xl">
            Doing everything?
            <span className="block text-cyan-200">Whatever I want.</span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
            No niche. No limits. Multiple worlds. Building products, systems,
            stories and digital experiences without permission.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-cyan-100"
            >
              View Work
            </a>

            <a
              href="#skills"
              className="rounded-full border border-white/15 bg-black/20 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md transition hover:border-cyan-200/60 hover:text-cyan-100"
            >
              Explore Skills
            </a>
          </div>

          <div className="mt-8 grid max-w-lg grid-cols-3 gap-4">
            <Stat value="02" label="Live Projects" />
            <Stat value="05" label="Core Skills" />
            <Stat value="∞" label="Future Ideas" />
          </div>
        </div>
      </div>
    </section>
  );
}