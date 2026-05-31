const skills = [
  "Social Media Marketing",
  "Generative AI Development",
  "High-End Web Development",
  "Writer / Comics",
  "AWS Deployment",
];

const projects = [
  {
    name: "LeadsRift",
    type: "Outbound Growth System",
    desc: "A premium B2B lead generation and appointment-setting website built with a dark futuristic SaaS identity.",
  },
  {
    name: "RIFTO",
    type: "CRM Platform",
    desc: "A future CRM system for managing leads, agents, attendance, calls and growth operations.",
  },
  {
    name: "Writing / Comics Universe",
    type: "Creative IP",
    desc: "Stories, comics and cinematic worlds built around identity, legacy, ambition and transformation.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030407] text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <ParentCompany />
      <Contact />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#030407]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#hero" className="text-sm font-semibold tracking-[0.35em] text-white">
          ZADDY <span className="text-cyan-200">ISRAR</span>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.25em] text-white/55 md:flex">
          <a href="#skills" className="transition hover:text-white">Skills</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#parent" className="transition hover:text-white">Parent Company</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-cyan-300/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 shadow-[0_0_30px_rgba(0,217,255,0.15)] transition hover:border-cyan-200 hover:bg-cyan-300/10"
        >
          Start
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
      <BackgroundGlow />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-10">
          <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-200">
            Founder • Builder • Creator
          </div>

          <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-white sm:text-7xl md:text-8xl lg:text-9xl">
            Zaddy
            <span className="block text-white/35">Israr</span>
          </h1>

          <p className="mt-8 max-w-2xl text-3xl font-semibold uppercase leading-tight tracking-[-0.04em] text-white md:text-5xl">
            Doing everything?
            <span className="block text-cyan-200">Whatever I want.</span>
          </p>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/55 md:text-lg">
            No niche. No limits. Multiple worlds. Building products, systems,
            stories and digital experiences without permission.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-cyan-100"
            >
              View Work
            </a>
            <a
              href="#skills"
              className="rounded-full border border-white/15 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white/80 transition hover:border-cyan-200/60 hover:text-cyan-100"
            >
              Explore Skills
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-5">
            <Stat value="02" label="Live Projects" />
            <Stat value="05" label="Core Skills" />
            <Stat value="∞" label="Future Ideas" />
          </div>
        </div>

        <div className="relative flex h-[620px] items-center justify-center">
          <div className="absolute h-[760px] w-[760px] rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="blackhole relative h-[460px] w-[460px] rounded-full md:h-[620px] md:w-[620px]">
            <div className="absolute inset-[24%] rounded-full bg-black shadow-[0_0_100px_rgba(0,0,0,1)]" />
            <div className="absolute inset-[12%] rounded-full border border-cyan-200/30 shadow-[0_0_90px_rgba(0,217,255,0.25)]" />
            <div className="absolute inset-[2%] rounded-full border border-orange-300/20 shadow-[0_0_80px_rgba(255,140,50,0.13)]" />
          </div>

          <div className="absolute bottom-16 right-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">Current Mission</p>
            <p className="mt-2 text-lg font-semibold text-white">Build the universe.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative border-t border-white/10 px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionLabel label="Skills" title="The stack I use to build different worlds." />

        <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-10">
          <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/[0.03]" />
          <div className="relative grid gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-cyan-200/40 hover:bg-cyan-300/[0.04]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/60">
                    Node 0{index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">{skill}</h3>
                </div>
                <div className="h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_22px_rgba(0,217,255,0.9)]" />
              </div>
            ))}
          </div>

          <div className="mt-8 flex h-44 items-center justify-center rounded-3xl border border-dashed border-cyan-200/20 bg-black/30 text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-white/35">
              DNA animation placeholder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative border-t border-white/10 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel label="Projects" title="Selected work, systems and creative universes." />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group min-h-[390px] rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-2 hover:border-cyan-200/40 hover:bg-cyan-300/[0.04]"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/60">
                {project.type}
              </p>

              <h3 className="mt-8 text-4xl font-black uppercase tracking-[-0.06em] text-white">
                {project.name}
              </h3>

              <p className="mt-6 text-base leading-7 text-white/60">{project.desc}</p>

              <div className="mt-10 flex h-36 items-center justify-center rounded-3xl border border-dashed border-white/15 bg-black/30">
                <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                  Project visual 0{index + 1}
                </p>
              </div>

              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-white/35">
                View case study →
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative border-t border-white/10 px-6 py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/60">About Me</p>

          <h2 className="mt-8 text-4xl font-black uppercase leading-none tracking-[-0.06em] text-white md:text-6xl">
            Legacy over labels.
          </h2>

          <p className="mt-8 text-xl leading-9 text-white/65">
            “Its not about me — its not about you, its not even about us. Its
            about legacy — about what we chose to leave behind.”
          </p>

          <p className="mt-8 text-base leading-8 text-white/45">
            I am building a personal brand around creation without limits:
            websites, AI systems, stories, comics, brands and future products.
            The goal is not to fit inside one title. The goal is to leave work
            behind that speaks louder than a title ever could.
          </p>
        </div>

        <div className="flex min-h-[460px] items-center justify-center rounded-[2.5rem] border border-white/10 bg-black/30 p-8">
          <div className="text-center">
            <div className="mx-auto h-48 w-32 rounded-t-full border border-cyan-200/30 bg-cyan-200/[0.03] shadow-[0_0_80px_rgba(0,217,255,0.12)]" />
            <p className="mt-10 text-xs uppercase tracking-[0.28em] text-white/35">
              Legacy temple visual placeholder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ParentCompany() {
  const nodes = ["Products", "AI Systems", "Stories", "Brands", "Media"];

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

            {nodes.map((node, index) => (
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

function Contact() {
  return (
    <section id="contact" className="relative border-t border-white/10 px-6 py-32">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/60">Contact</p>

        <h2 className="mt-8 text-5xl font-black uppercase leading-none tracking-[-0.07em] text-white md:text-8xl">
          Let’s build something epic.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/55">
          Available for high-end websites, social media systems, AI automation,
          writing projects and digital deployment work.
        </p>

        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/35">
          ZADDYISRAR.COM
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@zaddyisrar.com"
            className="rounded-full bg-cyan-100 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-white"
          >
            Email Me
          </a>
          <a
            href="https://github.com/zaddyisrar"
            target="_blank"
            className="rounded-full border border-white/15 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white/80 transition hover:border-cyan-200/60 hover:text-cyan-100"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[0.25em] text-white/35 md:flex-row">
        <p>© 2026 Zaddy Israr</p>
        <p>No niche. No limits. Multiple worlds.</p>
      </div>
    </footer>
  );
}

function SectionLabel({ label, title }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/60">
        {label}
      </p>
      <h2 className="mt-6 max-w-3xl text-4xl font-black uppercase leading-none tracking-[-0.06em] text-white md:text-6xl">
        {title}
      </h2>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-3xl font-black text-white">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/35">
        {label}
      </p>
    </div>
  );
}

function BackgroundGlow() {
  return (
    <>
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-orange-400/[0.05] blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.12]" />
    </>
  );
}