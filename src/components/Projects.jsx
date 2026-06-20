import Image from "next/image";

const creationNodes = [
  { title: "Products", meta: "Digital builds" },
  { title: "AI Systems", meta: "Automation & agents" },
  { title: "Businesses", meta: "Growth machines" },
  { title: "Brands", meta: "Identity systems" },
  { title: "Stories", meta: "Worlds & IP" },
  { title: "Media", meta: "Content engines" },
  { title: "Research", meta: "Learning loops" },
  { title: "Experiments", meta: "Future tests" },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden border-t border-white/10 bg-[#030407] px-6 py-32"
    >
      <div className="absolute inset-0">
        <Image
          src="/visuals/projects/projects-final.png"
          alt="Galaxy of Creations"
          fill
          className="object-cover object-[62%_center] opacity-100"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#030407]/78 via-[#030407]/15 to-[#030407]/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030407]/80 via-transparent to-[#030407]/90" />

      <div className="relative z-10 mx-auto grid min-h-[72vh] max-w-[1600px] items-center gap-20 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="max-w-[680px]">
          <p className="mb-6 text-[12px] font-bold uppercase tracking-[0.34em] text-cyan-300">
            Projects
          </p>

          <h2 className="font-black uppercase leading-[0.8] tracking-[0.04em]">
            <span className="block text-[54px] font-light text-white sm:text-[78px] md:text-[92px]">
              Galaxy
            </span>
            <span className="block text-[50px] font-light text-white sm:text-[72px] md:text-[86px]">
              Of
            </span>
            <span className="block text-[52px] font-light text-cyan-300 sm:text-[76px] md:text-[90px]">
              Creations.
            </span>
          </h2>

          <p className="mt-8 max-w-lg text-[16px] leading-8 text-white/70">
            Every idea begins as a spark. Every spark becomes a world. Every
            world becomes part of a larger ecosystem.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-3 border border-cyan-300/40 bg-cyan-300/5 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-cyan-200 backdrop-blur-md transition hover:border-cyan-200 hover:bg-cyan-300/10 hover:text-white"
          >
            Explore The Galaxy
            <span>↗</span>
          </a>
        </div>

        <div className="relative ml-auto h-[620px] w-full max-w-[860px]">
          {creationNodes.map((node, index) => {
            const positions = [
              "left-[20%] top-[12%]",
              "left-[52%] top-[4%]",
              "right-[8%] top-[18%]",
              "right-[2%] top-[52%]",
              "left-[52%] bottom-[6%]",
              "left-[18%] bottom-[12%]",
              "left-[2%] top-[48%]",
              "left-[36%] top-[72%]",
            ];

            return (
              <div
                key={node.title}
                className={`absolute ${positions[index]} group`}
              >
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.9)] transition group-hover:scale-125" />

                  <div>
                    <h3 className="text-[12px] font-black uppercase tracking-[0.18em] text-white">
                      {node.title}
                    </h3>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-cyan-200/55">
                      {node.meta}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/5" />
        </div>
      </div>
    </section>
  );
}