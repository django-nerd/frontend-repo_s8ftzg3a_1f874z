function ServiceCard({ title, items }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/7 transition min-h-[220px]">
      <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
      <ul className="space-y-2 text-white/80 text-sm">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_200px,rgba(29,78,216,0.15),transparent)]" />
      <div className="relative container mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Sports hosting, handled.</h2>
          <p className="text-white/70 mt-2">MC for live sports, tournament desk host, awards nights, brand and corporate activations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <ServiceCard title="Live Sports & Arenas" items={["Pre‑game hype & intros","In‑game crowd engagement","Post‑game interviews","Sponsor reads & activations"]} />
          <ServiceCard title="Broadcast & Desk" items={["On‑camera anchoring","Panel moderation","Athlete interviews","Script & cue coordination"]} />
          <ServiceCard title="Corporate & Brand" items={["Product launches","Awards ceremonies","Community events","Run‑of‑show management"]} />
        </div>
      </div>
    </section>
  );
}

export default Services;
