import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#030407] px-6 pt-8"
    >
      <div className="absolute inset-0">
        <Image
          src="/visuals/blackhole/blackhole-final.png"
          alt="Cosmic black hole"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_65%]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#030407]/75 via-[#030407]/15 to-transparent" />

      <div className="pointer-events-none absolute left-0 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-cyan-400/8 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <div className="max-w-[650px] scale-90 origin-left translate-y-2">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.34em] text-cyan-300">
            Yo, I&apos;m
          </p>

          <h1 className="font-black uppercase leading-[0.78] tracking-[0.05em]">
            <span className="block text-[72px] font-light text-white sm:text-[96px] md:text-[112px]">
              Zaddy
            </span>

            <span className="block text-[60px] font-light text-cyan-300 sm:text-[80px] md:text-[94px]">
              Israr
            </span>
          </h1>

          <div className="mt-8">
            <p className="text-[24px] font-black uppercase tracking-[0.07em] text-white md:text-[32px]">
              Building <span className="text-cyan-300">Whatever</span> I Want.
            </p>
          </div>

          <p className="mt-7 max-w-lg text-[16px] leading-8 text-white/75">
            I build digital products, AI systems, stories and experiences
            without limits. No niche. No limits. Multiple worlds.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-cyan-300/40 bg-cyan-300/5 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-cyan-200 backdrop-blur-md transition hover:border-cyan-200 hover:bg-cyan-300/10 hover:text-white"
            >
              Explore My Universe
              <span className="transition group-hover:translate-x-1">↗</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-cyan-100/80 transition hover:text-white"
            >
              View My Work
              <span>✦</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}