import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView(0.15)

  const focusAreas = [
    { icon: <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, title: 'React & Frontend', desc: 'Building performant, accessible UIs with React, Next.js, and modern CSS.' },
    { icon: <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>, title: 'Backend Engineering', desc: 'Designing REST APIs, authentication, and scalable server architecture with Node.js.' },
    { icon: <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, title: 'AI Integration', desc: 'Integrating AI APIs to build intelligent, real-world products.' },
    { icon: <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>, title: 'DSA & Fundamentals', desc: 'Actively practicing data structures, algorithms, and software engineering principles.' },
  ]

  return (
    <section id="about" className="py-44 relative" ref={ref}>
      <div className="glow-orb w-[400px] h-[400px] top-0 right-[-100px] bg-yellow-500/8" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-4">Who I Am</p>
          <h2 className="section-heading text-white mb-5">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass-card p-9 space-y-6">
              <p className="text-stone-300 text-base leading-[2.0]">
                I'm a <span className="text-white font-semibold">MERN Stack Developer</span> and B.Tech student at BV Raju Institute of Technology (CSE — AI & ML, SGPA: <span className="text-yellow-400 font-semibold">9.4</span>), currently building scalable full-stack applications and strengthening my problem-solving skills through Data Structures and Algorithms.
              </p>
              <p className="text-stone-300 text-base leading-[2.0]">
                I specialize in building <span className="text-white font-semibold">responsive, production-ready web applications</span> using MongoDB, Express.js, React, and Node.js. I prefer shipping <span className="text-yellow-300 font-medium">practical systems</span> that solve real user problems over tutorial-level clones.
              </p>
              <p className="text-stone-300 text-base leading-[2.0]">
                My current focus is on <span className="text-white font-semibold">AI-powered applications</span>, backend architecture, and preparing for product-based engineering roles by mastering fundamentals and execution speed.
              </p>
            </div>

            {/* Education card */}
            <div className="glass-card p-7 flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/12 border border-yellow-500/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v7" /></svg>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">B.Tech — CSE (AI & ML)</div>
                <div className="text-stone-400 text-sm mt-1">BV Raju Institute of Technology, Narsapur</div>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-yellow-400 text-xs font-semibold">2024 – 2028</span>
                  <span className="w-1 h-1 rounded-full bg-stone-600" />
                  <span className="text-green-400 text-xs font-bold">SGPA: 9.4</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="glass-card p-6 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="mb-4 flex items-center justify-center w-12 h-12 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform">{area.icon}</div>
                <div className="text-white font-semibold text-sm mb-2.5 group-hover:text-yellow-300 transition-colors">{area.title}</div>
                <div className="text-stone-500 text-xs leading-relaxed">{area.desc}</div>
              </motion.div>
            ))}

            {/* Quick info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="sm:col-span-2 glass-card p-6"
            >
              <div className="text-xs text-stone-500 uppercase tracking-widest font-semibold mb-4">Quick Info</div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                {[
                  ['Location', 'Narsapur, India'],
                  ['Email', 'lahariraparthi1@gmail.com'],
                  ['College', 'BVRIT'],
                  ['Status', 'Open to work'],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-0.5">
                    <span className="text-stone-500 text-xs">{k}</span>
                    <span className="text-stone-300 text-xs font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
