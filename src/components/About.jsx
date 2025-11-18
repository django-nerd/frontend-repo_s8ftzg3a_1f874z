function About() {
  return (
    <section className="relative py-16 sm:py-24 bg-slate-950/95 border-t border-white/10">
      <div className="relative container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Your crowd. Your story. My voice.</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            I’m an experienced sports event moderator who thrives on live moments. I coordinate with producers, cue teams, and talent to keep timelines tight and energy high. Whether it’s 500 people or 50,000, I make the run‑of‑show feel effortless.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/75">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-white">10+ years</div>
              <div>On‑stage experience</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-white">200+ events</div>
              <div>Sports & brand shows</div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl border border-white/10 p-6">
          <ul className="space-y-3 text-white/85 text-sm">
            <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-blue-400" /> Scripted + live improvisation</li>
            <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-blue-400" /> Athlete & VIP interview experience</li>
            <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-blue-400" /> Timekeeping, cues, IFB coordination</li>
            <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-blue-400" /> Multilingual intros and transitions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
