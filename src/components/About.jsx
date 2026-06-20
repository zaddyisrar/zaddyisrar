import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden border-t border-white/10 bg-[#030407] px-6 py-32"
    >
      <div className="absolute inset-0">
        <Image
          src="/visuals/about/legacy-temple-final.png"
          alt="Legacy Temple"
          fill
          className="object-cover object-center opacity-100"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#030407]/75 via-[#030407]/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030407]/80 via-transparent to-[#030407]/90" />

      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[1600px] items-center">
        <div className="max-w-[820px]">
          <p className="mb-6 text-[12px] font-bold uppercase tracking-[0.34em] text-cyan-300">
            About Me
          </p>

          <h2 className="font-black uppercase leading-[0.8] tracking-[0.04em]">
            <span className="block text-[52px] font-light text-white sm:text-[78px] md:text-[92px]">
              It&apos;s Not
            </span>
            <span className="block text-[52px] font-light text-white sm:text-[78px] md:text-[92px]">
              About Me.
            </span>
            <span className="block text-[46px] font-light text-cyan-300 sm:text-[68px] md:text-[82px]">
              It&apos;s About Legacy.
            </span>
          </h2>

          <div className="mt-8 max-w-xl space-y-4 text-[16px] leading-8 text-white/70">
            <p>
              This is not about fame. It is not about followers. It is not even
              about success.
            </p>

            <p>
              It is about building systems, stories and worlds that continue to
              exist long after I am gone.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-cyan-100 backdrop-blur-md transition hover:border-cyan-200 hover:bg-cyan-300/15 hover:text-white"
          >
            The Legacy
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}