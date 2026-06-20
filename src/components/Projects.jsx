import Image from "next/image";
import { projects } from "@/data/siteData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden border-t border-white/10 bg-[#030407] px-6 py-32"
    >
      <div className="absolute inset-0">
        <Image
          src="/visuals/projects/projects-planet-final.png"
          alt="Projects Planet"
          fill
          className="object-cover object-[55%_center] opacity-100"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#030407]/70 via-[#030407]/10 to-[#030407]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030407]/80 via-transparent to-[#030407]/90" />

      <div className="relative z-10 mx-auto grid min-h-[72vh] max-w-[1600px] items-center gap-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="max-w-[680px]">
          <p className="mb-6 text-[12px] font-bold uppercase tracking-[0.34em] text-cyan-300">
            Projects
          </p>

          <h2 className="font-black uppercase leading-[0.8] tracking-[0.04em]">
            <span className="block text-[56px] font-light text-white sm:text-[80px] md:text-[96px]">
              Every
            </span>
            <span className="block text-[54px] font-light text-white sm:text-[78px] md:text-[92px]">
              Project
            </span>
            <span className="block text-[42px] font-light text-white/70 sm:text-[60px] md:text-[72px]">
              Is A World
            </span>
            <span className="block text-[50px] font-light text-cyan-300 sm:text-[72px] md:text-[84px]">
              Of Its Own.
            </span>
          </h2>

          <p className="mt-8 max-w-lg text-[16px] leading-8 text-white/70">
            Businesses. Systems. Stories. Universes. Everything I build becomes
            part of a larger ecosystem.
          </p>
        </div>

        <div className="relative ml-auto w-full max-w-[720px]">
          <div className="grid gap-4">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="group relative overflow-hidden rounded-[1.4rem] border border-cyan-300/15 bg-[#030407]/40 px-6 py-5 backdrop-blur-xl transition hover:border-cyan-200/45 hover:bg-cyan-300/[0.04]"
              >
                <div className="absolute inset-y-0 left-0 w-px bg-cyan-300/50 opacity-0 transition group-hover:opacity-100" />

                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-300/70">
                      World 0{index + 1}
                    </p>

                    <h3 className="mt-3 text-[22px] font-black uppercase leading-none tracking-[-0.04em] text-white">
                      {project.name}
                    </h3>

                    <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-200/70">
                      {project.type}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/5 text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.14)] transition group-hover:border-cyan-200 group-hover:bg-cyan-300/10">
                    ↗
                  </div>
                </div>

                <p className="mt-4 max-w-xl text-[13px] leading-6 text-white/55">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute right-0 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />
        </div>
      </div>
    </section>
  );
}