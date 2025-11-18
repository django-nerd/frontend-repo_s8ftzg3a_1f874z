import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

function Contact() {
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: 'loading', message: 'Sending…' });
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.detail || 'Failed to send');
      setStatus({ state: 'success', message: 'Thanks! I\'ll get back to you shortly.' });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ state: 'error', message: err.message || 'Something went wrong' });
    }
  }

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-slate-950 border-t border-white/10">
      <div className="relative container mx-auto px-6">
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Let’s talk about your event</h2>
          <p className="text-white/70 mt-2">Share a few details and I’ll reply within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/80 mb-1">Name</label>
            <input name="name" required className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your full name" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/80 mb-1">Email</label>
            <input type="email" name="email" required className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@company.com" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/80 mb-1">Phone</label>
            <input name="phone" className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Optional" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/80 mb-1">Company</label>
            <input name="company" className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Brand or organization" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/80 mb-1">Event Date</label>
            <input name="event_date" className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. May 24 or TBD" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/80 mb-1">Budget</label>
            <input name="budget" className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Optional" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-white/80 mb-1">Message</label>
            <textarea name="message" required rows={5} className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell me about the audience, venue, and goals…" />
          </div>
          <div className="sm:col-span-2 flex items-center gap-4">
            <button type="submit" className="rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition disabled:opacity-60" disabled={status.state==='loading'}>
              {status.state==='loading' ? 'Sending…' : 'Send Inquiry'}
            </button>
            {status.state !== 'idle' && (
              <p className={`${status.state==='success' ? 'text-emerald-400' : status.state==='error' ? 'text-rose-400' : 'text-white/80'} text-sm`}>
                {status.message}
              </p>
            )}
          </div>
        </form>

        <p className="mt-6 text-xs text-white/50">By submitting, you agree to be contacted regarding your inquiry.</p>
      </div>
    </section>
  );
}

export default Contact;
