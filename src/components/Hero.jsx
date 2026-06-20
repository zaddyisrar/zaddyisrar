import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#030407] px-6 pt-28 sm:pt-8"
    >
      <div className="absolute inset-0">
        <Image
          src="/visuals/blackhole/blackhole-final.png"
          alt="Cosmic black hole"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[63%_58%] sm:object-[72%_65%]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#030407]/80 via-[#030407]/25 to-transparent sm:from-[#030407]/75 sm:via-[#030407]/15" />

      <div className="pointer-events-none absolute left-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-cyan-400/8 blur-[120px] sm:h-[520px] sm:w-[520px] sm:blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <div className="max-w-[650px] origin-left translate-y-4 scale-100 sm:translate-y-2 sm:scale-90">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.32em] text-cyan-300 sm:mb-4 sm:text-[12px] sm:tracking-[0.34em]">
            Yo, I&apos;m
          </p>

          <h1 className="font-black uppercase leading-[0.8] tracking-[0.04em] sm:leading-[0.78] sm:tracking-[0.05em]">
            <span className="block text-[58px] font-light text-white sm:text-[96px] md:text-[112px]">
              Zaddy
            </span>

            <span className="block text-[50px] font-light text-cyan-300 sm:text-[80px] md:text-[94px]">
              Israr
            </span>
          </h1>

          <div className="mt-7 sm:mt-8">
            <p className="max-w-[330px] text-[25px] font-black uppercase leading-tight tracking-[0.06em] text-white sm:max-w-none sm:text-[24px] sm:leading-normal sm:tracking-[0.07em] md:text-[32px]">
              Building <span className="text-cyan-300">Whatever</span> I Want.
            </p>
          </div>

          <p className="mt-6 max-w-[330px] text-[15px] leading-7 text-white/75 sm:mt-7 sm:max-w-lg sm:text-[16px] sm:leading-8">
            I build digital products, AI systems, stories and experiences
            without limits. No niche. No limits. Multiple worlds.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-between border border-cyan-300/40 bg-cyan-300/5 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-200 backdrop-blur-md transition hover:border-cyan-200 hover:bg-cyan-300/10 hover:text-white sm:w-auto sm:justify-start sm:px-7 sm:text-[12px]"
            >
              Explore My Universe
              <span className="transition group-hover:translate-x-1">↗</span>
            </a>

            <a
              href="#projects"
              className="inline-flex w-full items-center justify-between px-1 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-100/80 transition hover:text-white sm:w-auto sm:justify-start sm:gap-3 sm:px-0 sm:text-[12px]"
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