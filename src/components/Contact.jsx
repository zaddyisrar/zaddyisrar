import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden border-t border-white/10 px-6 py-32"
    >
      <div className="absolute inset-0">
        <Image
          src="/visuals/portal/portal-final.png"
          alt="Cosmic Portal"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030407] via-[#030407]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030407] via-transparent to-[#030407]" />

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/60">
            Contact
          </p>

          <h2 className="mt-8 text-5xl font-black uppercase leading-none tracking-[-0.07em] text-white md:text-8xl">
            Let’s build something epic.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/60 md:text-lg">
            Available for high-end websites, social media systems, AI automation,
            writing projects and digital deployment work.
          </p>

          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/35">
            ZADDYISRAR.COM
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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