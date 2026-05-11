import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

/* ─────────────────────────────────────────────
   Timeline data — ordered newest → oldest
───────────────────────────────────────────── */
const timeline = [
  {
    type: 'work',
    role: 'Flutter Developer Intern (Paid)',
    org: 'RGES India',
    period: 'Oct 2025 – Feb 2026',
    tag: 'Paid Internship',
    tagColor: 'bg-green-500/15 text-green-300 border-green-500/30',
    dotColor: 'from-green-400 to-emerald-500',
    dotShadow: 'shadow-green-500/40',
    icon: <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    bullets: [
      'Developed responsive dashboard & profile modules for enterprise mobile apps.',
      'Implemented pixel-perfect UI from Figma designs using Flutter/Dart.',
      'Collaborated with design team to ship production-ready components on schedule.',
    ],
    tech: ['Flutter', 'Dart', 'Figma', 'Mobile Dev'],
  },
  {
    type: 'work',
    role: 'Virtual Internship — Data Science',
    org: 'Infosys Springboard',
    period: 'Nov 2025 – Jan 2026',
    tag: 'Internship',
    tagColor: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
    dotColor: 'from-yellow-400 to-amber-500',
    dotShadow: 'shadow-yellow-500/40',
    icon: <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    bullets: [
      'Built a Crypto Volatility & Risk Analysis system with Python & Pandas on real financial data.',
      'Performed data preprocessing, volatility & trend analysis to assess market risk.',
      'Automated analysis pipelines and generated actionable insights reports.',
    ],
    tech: ['Python', 'Pandas', 'Data Analysis', 'Financial Modelling'],
  },
  {
    type: 'education',
    role: 'B.Tech — CSE (AI & ML)',
    org: 'BV Raju Institute of Technology, Narsapur',
    period: '2024 – 2028',
    tag: 'Education',
    tagColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    dotColor: 'from-amber-400 to-yellow-500',
    dotShadow: 'shadow-amber-500/40',
    icon: <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v7" /></svg>,
    bullets: [
      'Pursuing B.Tech in Computer Science Engineering with AI & ML specialisation.',
      'Current SGPA: 9.4 — consistently among top performers in the batch.',
      'Active in development clubs, open-source contributions, and hackathons.',
    ],
    tech: ['React', 'Node.js', 'Python', 'DSA', 'ML Fundamentals'],
  },
]

/* ─── Animate the growing vertical line ─── */
const LineGrow = ({ inView }) => (
  <motion.div
    className="absolute left-[19px] top-0 w-[2px] origin-top"
    style={{
      background: 'linear-gradient(to bottom, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
      scaleY: 0,
    }}
    animate={inView ? { scaleY: 1, height: '100%' } : { scaleY: 0 }}
    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
  />
)

export default function Experience() {
  const [ref, inView] = useInView(0.08)

  return (
    <section id="experience" className="py-60 relative" ref={ref}>
      {/* Ambient glow */}
      <div className="glow-orb w-[450px] h-[450px] top-20 left-[-120px] bg-yellow-500/8 pointer-events-none" />
      <div className="glow-orb w-[350px] h-[350px] bottom-10 right-[-80px] bg-amber-500/6 pointer-events-none" />

      <div className="section-container">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="text-yellow-400 text-xs font-bold tracking-[0.22em] uppercase mb-4">
            Work &amp; Education
          </p>
          <h2 className="section-heading text-white mb-5">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-14 h-0.5 rounded-full bg-gradient-to-r from-yellow-400 to-transparent" />
        </motion.div>

        {/* ── Timeline wrapper ── */}
        <div className="relative max-w-3xl">
          {/* Static grey track (full height placeholder) */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-white/5 rounded-full" />

          {/* Animated coloured fill line */}
          <LineGrow inView={inView} />

          {/* ── Items ── */}
          <div className="flex flex-col gap-0">
            {timeline.map((item, idx) => {
              const isLast = idx === timeline.length - 1
              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: -28 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.65,
                    delay: 0.25 + idx * 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative pl-16 ${isLast ? 'pb-0' : 'pb-14'}`}
                >
                  {/* ── Dot ── */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.4 + idx * 0.18, duration: 0.4, type: 'spring', stiffness: 260 }}
                    className={`absolute left-[9px] top-[22px] w-[22px] h-[22px] rounded-full bg-gradient-to-br ${item.dotColor} border-[3px] border-[#08090b] shadow-lg ${item.dotShadow} z-10`}
                  />

                  {/* ── Card ── */}
                  <div className="glass-card p-7 md:p-8 hover:border-yellow-500/22 hover:-translate-y-0.5 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl leading-none">{item.icon}</span>
                        <div>
                          <h3 className="font-['Outfit'] font-bold text-white text-[0.95rem] leading-snug group-hover:text-yellow-200 transition-colors">
                            {item.role}
                          </h3>
                          <p className="text-yellow-400/80 text-sm mt-0.5 font-medium">{item.org}</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <span className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${item.tagColor}`}>
                          {item.tag}
                        </span>
                        <span className="text-stone-600 text-xs font-medium tabular-nums">{item.period}</span>
                      </div>
                    </div>

                    {/* Thin separator */}
                    <div className="h-px bg-white/5 mb-5" />

                    {/* Bullet points */}
                    <ul className="space-y-3 mb-6">
                      {item.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-3 text-stone-400 text-sm leading-[1.85]">
                          <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-yellow-500/60 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {item.tech.map((t) => (
                        <span key={t}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-stone-400 text-[11px] font-medium tracking-wide">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Connector line segment accent */}
                  <div className="absolute left-[30px] top-[31px] w-6 h-[2px] bg-white/8" />
                </motion.div>
              )
            })}
          </div>

          {/* End cap dot */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 1.1, duration: 0.35, type: 'spring' }}
            className="absolute left-[14px] bottom-0 w-3 h-3 rounded-full bg-white/10 border border-white/15"
          />
        </div>
      </div>
    </section>
  )
}
