import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const [ref, inView] = useInView(0.1)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.open(`mailto:lahariraparthi1@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const contacts = [
    {
      label: 'Email', value: 'lahariraparthi1@gmail.com',
      href: 'mailto:lahariraparthi1@gmail.com',
      icon: <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, color: 'text-yellow-400',
    },
    {
      label: 'LinkedIn', value: 'lahari-raaparthi-605bb9308',
      href: 'https://linkedin.com/in/lahari-raaparthi-605bb9308',
      icon: <svg className="w-5 h-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, color: 'text-amber-300',
    },
    {
      label: 'GitHub', value: 'github.com/lahari936',
      href: 'https://github.com/lahari936',
      icon: <svg className="w-5 h-5 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>, color: 'text-stone-300',
    },
    {
      label: 'Phone', value: '+91 9059670363',
      href: 'tel:+919059670363',
      icon: <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, color: 'text-green-400',
    },
  ]

  return (
    <section id="contact" className="py-56 relative" ref={ref}>
      <div className="glow-orb w-[500px] h-[500px] bottom-0 left-[-100px] bg-yellow-500/10" />
      <div className="glow-orb w-[350px] h-[350px] top-20 right-[-80px] bg-amber-500/7" />

      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-20">
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-4">Let's Connect</p>
          <h2 className="section-heading text-white mb-5">Get In <span className="gradient-text">Touch</span></h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent rounded-full" />
          <p className="text-stone-500 text-sm mt-5 max-w-md leading-relaxed">
            Open to full-time roles, internships, freelance projects, and collaborations. Drop a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left — Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-4">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="glass-card p-5 flex items-center gap-4 hover:border-yellow-500/28 hover:-translate-y-0.5 transition-all duration-300 group block"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <div>
                  <div className="text-stone-500 text-xs font-medium mb-0.5 tracking-wide uppercase">{c.label}</div>
                  <div className={`text-sm font-medium leading-relaxed ${c.color}`}>{c.value}</div>
                </div>
                <svg className="w-4 h-4 text-stone-700 group-hover:text-yellow-400 transition-colors ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </motion.a>
            ))}

            {/* Resume download */}
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
              <a href="https://drive.google.com/file/d/1OGjH88S_AHaY29qlqbNr-VJ4To3TgeJG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center mt-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="glass-card p-9 space-y-6">
              <div>
                <label className="block text-stone-400 text-xs font-semibold uppercase tracking-widest mb-2.5">Your Name</label>
                <input
                  type="text" required placeholder="Lahari Raaparthi"
                  value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3.5 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-yellow-500/45 focus:bg-white/8 transition-all"
                />
              </div>
              <div>
                <label className="block text-stone-400 text-xs font-semibold uppercase tracking-widest mb-2.5">Email Address</label>
                <input
                  type="email" required placeholder="you@example.com"
                  value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3.5 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-yellow-500/45 focus:bg-white/8 transition-all"
                />
              </div>
              <div>
                <label className="block text-stone-400 text-xs font-semibold uppercase tracking-widest mb-2.5">Message</label>
                <textarea
                  rows={5} required placeholder="Tell me about your project or opportunity..."
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3.5 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-yellow-500/45 focus:bg-white/8 transition-all resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                {sent ? (
                  <><span className="text-green-700">✓</span> Opening Email Client...</>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
