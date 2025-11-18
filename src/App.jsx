import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">Sports Host</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-full bg-white text-black px-3 py-1.5 text-xs font-semibold hover:bg-white/90 transition">Book</a>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <footer className="py-10 text-center text-xs text-white/60 border-t border-white/10">
        © {new Date().getFullYear()} Sports Host — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
