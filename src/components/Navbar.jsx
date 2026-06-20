export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#030407]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-[0.35em] text-white"
        >
          ZADDY <span className="text-cyan-200">ISRAR</span>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.25em] text-white/55 md:flex">
          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
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