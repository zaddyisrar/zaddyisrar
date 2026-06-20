import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden border-t border-white/10 bg-[#030407] px-6 py-32"
    >
      <div className="absolute inset-0">
        <Image
          src="/visuals/portal/portal-final.png"
          alt="Cosmic Portal"
          fill
          className="object-cover object-center opacity-100"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#030407]/75 via-[#030407]/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030407]/80 via-transparent to-[#030407]/90" />

      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[1600px] items-center">
        <div className="max-w-[850px]">
          <p className="mb-6 text-[12px] font-bold uppercase tracking-[0.34em] text-cyan-300">
            Contact
          </p>

          <h2 className="font-black uppercase leading-[0.8] tracking-[0.04em]">
            <span className="block text-[54px] font-light text-white sm:text-[78px] md:text-[92px]">
              Let&apos;s Build
            </span>

            <span className="block text-[54px] font-light text-white sm:text-[78px] md:text-[92px]">
              Something
            </span>

            <span className="block text-[52px] font-light text-cyan-300 sm:text-[74px] md:text-[88px]">
              Epic.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-[16px] leading-8 text-white/70">
            Available for high-end websites, social media systems,
            AI automation, creative projects and digital deployment work.
          </p>

          <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-white/35">
            ZADDYISRAR.COM
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:hello@zaddyisrar.com"
              className="rounded-full bg-cyan-100 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-white"
            >
              Email Me
            </a>

            <a
              href="https://github.com/zaddyisrar"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-black/20 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md transition hover:border-cyan-200/60 hover:text-cyan-100"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}