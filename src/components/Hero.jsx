import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70 pointer-events-none" />

      <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-xs text-white/80 mb-3">Sports Emcee • Event Host • Presenter</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            High‑Energy Sports Event Moderation
          </h1>
          <p className="mt-4 text-white/90 text-lg max-w-2xl">
            From stadium shows to brand activations, I bring precision timing, crowd energy, and a smooth run‑of‑show to every stage.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition">
              Book for your event
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-5 py-3 text-sm font-semibold hover:bg-white/20 transition">
              What I do
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
