import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    title: 'Zerodha-Inspired Stock Trading Platform',
    desc: 'Full-stack MERN trading platform clone emphasizing backend logic, database modeling, RESTful API design, and clean UI. Focuses on real trade data flow, portfolio management, and order handling.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'],
    github: 'https://github.com/lahari936',
    demo: null,
    icon: <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    gradient: 'from-green-500/15 to-emerald-500/5',
    border: 'border-green-500/15',
    tag: 'Full Stack',
    tagColor: 'text-green-400 bg-green-500/10 border-green-500/20',
  },
  {
    title: 'AI Powered Financial Tracker',
    desc: 'Intelligent expense tracker that visualizes finances through interactive pie charts, analyzes spending patterns, and provides AI-driven suggestions to manage budget effectively using Google AI APIs.',
    tech: ['React.js', 'Google AI API', 'Node.js', 'MongoDB', 'Chart.js'],
    github: 'https://github.com/lahari936',
    demo: null,
    icon: <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    gradient: 'from-blue-500/15 to-indigo-500/5',
    border: 'border-blue-500/15',
    tag: 'AI Product',
    tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    title: 'Gamified Habit Tracker',
    desc: 'Daily habit management app with streak tracking, leaderboards, progress analytics, and JWT authentication. Designed to drive consistency through gamification mechanics and a responsive dashboard UI.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    github: 'https://github.com/lahari936',
    demo: null,
    icon: <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    gradient: 'from-violet-500/15 to-purple-500/5',
    border: 'border-violet-500/15',
    tag: 'Full Stack',
    tagColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  },
  {
    title: 'AI Telugu Lyrics Generator',
    desc: 'AI-powered platform that generates authentic Telugu lyrics inspired by different musical styles. Features real-time generation, style-based prompting, and a clean responsive UI with optimized AI prompts.',
    tech: ['React.js', 'Node.js', 'AI APIs', 'MongoDB'],
    github: 'https://github.com/lahari936',
    demo: null,
    icon: <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>,
    gradient: 'from-pink-500/15 to-rose-500/5',
    border: 'border-pink-500/15',
    tag: 'AI Product',
    tagColor: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
  },
  {
    title: 'Crypto Volatility & Risk Analysis',
    desc: 'Data science project built during Infosys internship. Analyzes real-world crypto financial data using Python and Pandas — performing volatility analysis, trend detection, and generating actionable risk insights.',
    tech: ['Python', 'Pandas', 'Data Analysis', 'Visualization'],
    github: 'https://github.com/lahari936',
    demo: null,
    icon: <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    gradient: 'from-orange-500/15 to-amber-500/5',
    border: 'border-orange-500/15',
    tag: 'Data Science',
    tagColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  },
]

export default function Projects() {
  const [ref, inView] = useInView(0.08)

  return (
    <section id="projects" className="py-56 relative" ref={ref}>
      <div className="glow-orb w-[450px] h-[450px] top-20 right-[-100px] bg-yellow-500/8" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-4">What I've Built</p>
          <h2 className="section-heading text-white mb-5">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent rounded-full" />
          <p className="text-stone-500 text-sm mt-5 max-w-lg leading-relaxed">
            Production-focused projects that solve real problems. No tutorial clones.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`project-card bg-gradient-to-br ${proj.gradient} border ${proj.border} flex flex-col`}
            >
              {/* Card top */}
              <div className="p-6 flex-1">
                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-2xl">
                    {proj.icon}
                  </div>
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${proj.tagColor}`}>
                    {proj.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-['Outfit'] font-bold text-white text-base leading-snug mb-3">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {proj.desc}
                </p>
              </div>

              {/* Tech stack */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {proj.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 text-slate-400 text-[11px] font-medium border border-white/6">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="px-6 pb-6 flex gap-3">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 border border-white/8 text-slate-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                {proj.demo ? (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary justify-center py-2.5 text-sm"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    Live Demo
                  </a>
                ) : (
                  <span className="flex-1 flex items-center justify-center py-2.5 rounded-lg border border-white/5 text-slate-600 text-sm font-medium cursor-not-allowed">
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/lahari936"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex hover:border-yellow-500/35"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
