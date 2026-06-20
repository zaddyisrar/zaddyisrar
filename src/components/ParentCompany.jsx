import { enterpriseNodes } from "@/data/siteData";

export default function ParentCompany() {
  return (
    <section id="parent" className="relative border-t border-white/10 px-6 py-32">
      <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/10 bg-white/[0.035] p-8 md:p-14">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/60">
              Parent Company
            </p>

            <h2 className="mt-8 text-5xl font-black uppercase leading-none tracking-[-0.07em] text-white md:text-7xl">
              Zaddy Enterprises
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/55">
              The future ecosystem for products, brands, AI systems, media,
              stories and digital companies built under one identity.
            </p>
          </div>

          <div className="relative flex min-h-[380px] items-center justify-center rounded-[2rem] border border-white/10 bg-black/30">
            <div className="absolute h-56 w-56 rounded-full border border-cyan-200/20 shadow-[0_0_90px_rgba(0,217,255,0.12)]" />
            <div className="absolute h-72 w-72 rounded-full border border-white/5" />

            <div className="text-center">
              <p className="text-4xl font-black uppercase tracking-[-0.06em] text-white">
                Zaddy
              </p>
              <p className="text-2xl font-black uppercase tracking-[-0.04em] text-cyan-200">
                Enterprises
              </p>
            </div>

            {enterpriseNodes.map((node, index) => (
              <div
                key={node}
                className={`absolute rounded-full border border-cyan-200/20 bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/55 ${
                  index === 0
                    ? "left-8 top-10"
                    : index === 1
                    ? "right-8 top-16"
                    : index === 2
                    ? "right-12 bottom-16"
                    : index === 3
                    ? "left-14 bottom-14"
                    : "left-1/2 top-6 -translate-x-1/2"
                }`}
              >
                {node}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}