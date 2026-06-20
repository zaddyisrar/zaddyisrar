export default function SectionLabel({ label, title }) {
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