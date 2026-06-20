import Image from "next/image";
import { skills } from "@/data/siteData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden border-t border-white/10 bg-[#030407] px-6 py-32"
    >
      <div className="absolute inset-0">
        <Image
          src="/visuals/dna/dna-final.png"
          alt="DNA energy"
          fill
          className="object-cover object-center opacity-100"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#030407]/75 via-[#030407]/10 to-[#030407]/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030407]/80 via-transparent to-[#030407]/90" />

      <div className="relative z-10 mx-auto grid min-h-[72vh] max-w-[1600px] items-center gap-24 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="max-w-[560px]">
          <p className="mb-6 text-[12px] font-bold uppercase tracking-[0.34em] text-cyan-300">
            Skills
          </p>

          <h2 className="font-black uppercase leading-[0.78] tracking-[0.05em]">
            <span className="block text-[64px] font-light text-white sm:text-[88px] md:text-[104px]">
              Built
            </span>
            <span className="block text-[54px] font-light text-white sm:text-[76px] md:text-[90px]">
              Different.
            </span>
            <span className="block text-[46px] font-light text-white/70 sm:text-[66px] md:text-[78px]">
              Wired For
            </span>
            <span className="block text-[60px] font-light text-cyan-300 sm:text-[82px] md:text-[96px]">
              More.
            </span>
          </h2>

          <p className="mt-8 max-w-md text-[16px] leading-8 text-white/70">
            A blend of creativity, technology and systems thinking.
          </p>
        </div>

        <div className="relative ml-auto w-full max-w-[820px]">
          <div className="space-y-8">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="group grid grid-cols-[1fr_auto_280px] items-center gap-7"
              >
                <div className="h-px bg-cyan-300/35 transition group-hover:bg-cyan-200" />

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/35 bg-[#030407]/65 text-sm font-bold text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.16)] backdrop-blur-xl transition group-hover:border-cyan-200 group-hover:bg-cyan-300/10 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]">
                  {skill.icon}
                </div>

                <div>
                  <h3 className="text-[16px] font-bold text-white">
                    {skill.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-white/50">
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute left-[38%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />
        </div>
      </div>
    </section>
  );
}