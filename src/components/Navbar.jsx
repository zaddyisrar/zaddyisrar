export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-5 z-50 px-4 sm:px-6">
      <div className="mx-auto max-w-[1500px]">
        <div className="relative overflow-hidden rounded-full border border-cyan-300/10 bg-[#030407]/25 backdrop-blur-2xl">
          {/* subtle glow line */}
          <div className="absolute bottom-0 left-1/2 h-px w-28 -translate-x-1/2 bg-cyan-300/70 blur-[1px]" />

          {/* ambient glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/[0.02] via-transparent to-cyan-400/[0.02]" />

          <div className="relative flex items-center justify-between px-8 py-5">
            {/* Logo */}
            <a
              href="#hero"
              className="text-sm font-semibold tracking-[0.35em] text-white transition hover:text-cyan-100"
            >
              ZADDY <span className="text-cyan-200">ISRAR</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-12 md:flex">
              {[
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative text-xs font-medium uppercase tracking-[0.25em] text-white/55 transition duration-300 hover:text-white"
                >
                  {item.label}

                  <span className="absolute -bottom-3 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="#contact"
              className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.04] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-300/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
            >
              Enter
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}