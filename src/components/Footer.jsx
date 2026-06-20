export default function Footer() {
  const socials = [
    { label: "GH", name: "GitHub", href: "https://github.com/zaddyisrar" },
    { label: "IN", name: "LinkedIn", href: "#" },
    { label: "IG", name: "Instagram", href: "#" },
    { label: "FB", name: "Facebook", href: "#" },
    { label: "YT", name: "YouTube", href: "#" },
    { label: "@", name: "Email", href: "mailto:hello@zaddyisrar.com" },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#030407] px-6 py-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold uppercase tracking-[0.35em] text-white">
            ZADDY <span className="text-cyan-300">ISRAR</span>
          </h3>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={social.name}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.03] text-[11px] font-bold uppercase tracking-[0.12em] text-cyan-200 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-300/10 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
              >
                {social.label}
              </a>
            ))}
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/40">
            Building Whatever I Want.
          </p>

          <div className="mt-8 h-px w-full bg-white/10" />

          <p className="mt-8 text-xs text-white/35">
            © 2026 Zaddy Israr. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}