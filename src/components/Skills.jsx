import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { skills } from "@/data/siteData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden border-t border-white/10 px-6 py-32"
    >
      <div className="absolute inset-0">
        <Image
          src="/visuals/dna/dna-final.png"
          alt="DNA energy"
          fill
          className="object-cover object-center opacity-80"
        />
      </div>

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030407] via-[#030407]/55 to-[#030407]/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030407] via-transparent to-[#030407]" />

      <div className="relative z-10 mx-auto grid min-h-[70vh] max-w-7xl items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionLabel
          label="Skills"
          title="The stack I use to build different worlds."
        />

        <div className="relative ml-auto w-full max-w-xl rounded-[2rem] border border-white/10 bg-black/35 p-6 backdrop-blur-md md:p-10">
          <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/[0.03]" />

          <div className="relative grid gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 p-5 transition hover:border-cyan-200/40 hover:bg-cyan-300/[0.04]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/60">
                    Node 0{index + 1}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">
                    {skill}
                  </h3>
                </div>

                <div className="h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_22px_rgba(0,217,255,0.9)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}