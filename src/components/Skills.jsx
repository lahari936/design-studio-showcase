import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const skillCategories = [
  {
    icon: <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    title: 'Frontend',
    color: 'from-yellow-500/15 to-amber-500/5',
    border: 'border-yellow-500/20',
    accent: 'text-yellow-400',
    skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    icon: <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
    title: 'Backend',
    color: 'from-amber-500/15 to-orange-500/5',
    border: 'border-amber-500/20',
    accent: 'text-amber-400',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Python'],
  },
  {
    icon: <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
    title: 'Databases',
    color: 'from-green-500/15 to-emerald-500/5',
    border: 'border-green-500/20',
    accent: 'text-green-400',
    skills: ['MongoDB', 'Firebase', 'Mongoose', 'Pandas'],
  },
  {
    icon: <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: 'Tools',
    color: 'from-orange-500/15 to-amber-500/5',
    border: 'border-orange-500/20',
    accent: 'text-orange-400',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Netlify', 'Flutter', 'Figma'],
  },
  {
    icon: <svg className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>,
    title: 'CS Fundamentals',
    color: 'from-yellow-400/12 to-lime-500/5',
    border: 'border-yellow-400/20',
    accent: 'text-yellow-300',
    skills: ['Data Structures & Algorithms', 'OOPs', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="skills" className="py-56 relative" ref={ref}>
      <div className="glow-orb w-[500px] h-[500px] bottom-0 left-[-150px] bg-yellow-500/8" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-4">What I Work With</p>
          <h2 className="section-heading text-white mb-5">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent rounded-full" />
        </motion.div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: ci * 0.1 }}
              className={`relative glass-card p-7 bg-gradient-to-br ${cat.color} border ${cat.border} hover:-translate-y-1 transition-all duration-300 group`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 rounded-xl">{cat.icon}</div>
                <h3 className={`font-['Outfit'] font-bold text-base ${cat.accent}`}>{cat.title}</h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-stone-300 text-xs font-medium hover:bg-yellow-500/8 hover:border-yellow-500/20 hover:text-yellow-200 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 30px rgba(245,158,11,0.04)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
