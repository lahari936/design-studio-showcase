import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const profiles = [
  {
    name: 'GitHub',
    handle: '@lahari936',
    url: 'https://github.com/lahari936',
    desc: 'Source code, projects & contributions',
    /* Gold-yellow palette */
    gradient: 'from-yellow-500/18 via-amber-500/10 to-transparent',
    border: 'border-yellow-500/25',
    iconBg: 'bg-yellow-500/15',
    iconColor: 'text-yellow-300',
    handleColor: 'text-yellow-400',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'LeetCode',
    handle: 'lreg0nwrq0',
    url: 'https://leetcode.com/u/lreg0nwrq0',
    desc: 'DSA practice & algorithmic problem solving',
    gradient: 'from-amber-400/18 via-orange-400/10 to-transparent',
    border: 'border-amber-400/25',
    iconBg: 'bg-amber-400/15',
    iconColor: 'text-amber-300',
    handleColor: 'text-amber-400',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'lahari-raaparthi',
    url: 'https://linkedin.com/in/lahari-raaparthi-605bb9308',
    desc: 'Professional network & career updates',
    gradient: 'from-yellow-400/15 via-lime-400/8 to-transparent',
    border: 'border-yellow-400/22',
    iconBg: 'bg-yellow-400/15',
    iconColor: 'text-yellow-200',
    handleColor: 'text-yellow-300',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'CodeChef',
    handle: 'lahari6697',
    url: 'https://www.codechef.com/users/lahari6697',
    desc: 'Competitive programming contests',
    gradient: 'from-orange-400/18 via-amber-500/10 to-transparent',
    border: 'border-orange-400/25',
    iconBg: 'bg-orange-400/15',
    iconColor: 'text-orange-300',
    handleColor: 'text-orange-400',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.257.004C5.026.272-.257 5.655.021 11.899c.278 6.243 5.661 11.378 11.904 11.1 6.244-.279 11.379-5.662 11.1-11.905C22.748 4.85 17.488-.263 11.257.004zm2.162 13.828c-.27.107-.56.163-.855.163-.295 0-.585-.056-.855-.163l-1.286-.514-1.286.514c-.27.107-.56.163-.855.163s-.585-.056-.855-.163a2.35 2.35 0 01-1.553-2.2V8.35a.637.637 0 01.638-.638h.147a.637.637 0 01.638.638v3.282c0 .534.317 1.011.807 1.216l1.023.41V8.35a.637.637 0 01.638-.638h.147a.637.637 0 01.638.638v4.908l1.023-.41a1.35 1.35 0 00.807-1.216V8.35a.637.637 0 01.638-.638h.147a.637.637 0 01.638.638v3.282a2.35 2.35 0 01-1.553 2.2z"/>
      </svg>
    ),
  },
  {
    name: 'HackerRank',
    handle: '24211a6697',
    url: 'https://www.hackerrank.com/profile/24211a6697',
    desc: 'Skill certifications & coding challenges',
    gradient: 'from-yellow-300/15 via-amber-300/8 to-transparent',
    border: 'border-yellow-300/22',
    iconBg: 'bg-yellow-300/12',
    iconColor: 'text-yellow-200',
    handleColor: 'text-yellow-300',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24C10.714 24 2.25 19.114 1.608 18 .963 16.886.963 7.116 1.608 6 2.25 4.886 10.715 0 12 0zm.195 13.65h-.39c-.72 0-1.304-.582-1.304-1.3V9.65H9.196v2.7c0 1.598 1.305 2.9 2.91 2.9h1.79c1.605 0 2.91-1.302 2.91-2.9v-2.7h-1.305v2.7c0 .718-.584 1.3-1.306 1.3zm0-7.3h-.39C10.2 6.35 8.895 7.652 8.895 9.25v.15h1.305V9.25c0-.718.584-1.3 1.305-1.3h.39c.72 0 1.305.582 1.305 1.3v.15h1.305V9.25c0-1.598-1.305-2.9-2.91-2.9z"/>
      </svg>
    ),
  },
  {
    name: 'Codeforces',
    handle: 'lahariraparthi1',
    url: 'https://codeforces.com/profile/lahariraparthi1',
    desc: 'Competitive programming & rated contests',
    gradient: 'from-amber-300/18 via-yellow-400/10 to-transparent',
    border: 'border-amber-300/25',
    iconBg: 'bg-amber-300/12',
    iconColor: 'text-amber-200',
    handleColor: 'text-amber-300',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9.75-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9.75 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/>
      </svg>
    ),
  },
  {
    name: 'GeeksforGeeks',
    handle: 'lahariral6re',
    url: 'https://www.geeksforgeeks.org/profile/lahariral6re?tab=activity',
    desc: 'DSA articles, articles & interview prep',
    gradient: 'from-lime-400/15 via-yellow-400/8 to-transparent',
    border: 'border-lime-400/22',
    iconBg: 'bg-lime-400/12',
    iconColor: 'text-lime-300',
    handleColor: 'text-lime-300',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116.016 3.49 3.49 0 0 1-1.106-.705 3.34 3.34 0 0 1-.547-.714H9.692a3.34 3.34 0 0 1-.547.714 3.49 3.49 0 0 1-1.106.705 4.51 4.51 0 0 1-3.116-.016 3.691 3.691 0 0 1-1.104-.695 3.19 3.19 0 0 1-.565-.745A2.88 2.88 0 0 1 3 13.5c0-.54.14-1.01.4-1.36.28-.37.64-.62 1.03-.76a3.44 3.44 0 0 1 1.23-.2c.43 0 .85.07 1.23.2.38.14.71.37.97.66V9.65a2.74 2.74 0 0 1-.97.65c-.38.14-.8.2-1.23.2a3.55 3.55 0 0 1-1.23-.2A2.8 2.8 0 0 1 3.4 9.55 2.88 2.88 0 0 1 3 8.2c0-.54.14-1.01.4-1.36C3.68 6.47 4.04 6.22 4.43 6.08a3.55 3.55 0 0 1 1.23-.2c.43 0 .85.07 1.23.2.38.13.72.37.97.67v-.5h2.12v5.24h1.932V6.25h2.12v.5c.25-.3.59-.54.97-.67.38-.13.8-.2 1.23-.2.43 0 .85.07 1.23.2.39.14.75.39 1.03.76.26.35.4.82.4 1.36 0 .54-.14 1.01-.4 1.35-.28.37-.64.62-1.03.76a3.44 3.44 0 0 1-1.23.2c-.43 0-.85-.07-1.23-.2a2.74 2.74 0 0 1-.97-.65v2.39c.26-.29.59-.52.97-.66.38-.13.8-.2 1.23-.2.43 0 .85.07 1.23.2.39.14.75.39 1.03.76.26.35.4.82.4 1.36 0 .54-.13 1.01-.37 1.315z"/>
      </svg>
    ),
  },
  {
    name: 'InterviewBit',
    handle: 'lahari-raparthi',
    url: 'https://www.interviewbit.com/profile/lahari-raparthi',
    desc: 'Interview preparation & structured learning',
    gradient: 'from-yellow-500/15 via-amber-400/8 to-transparent',
    border: 'border-yellow-500/22',
    iconBg: 'bg-yellow-500/12',
    iconColor: 'text-yellow-200',
    handleColor: 'text-yellow-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
]

export default function CodingProfiles() {
  const [ref, inView] = useInView(0.08)

  return (
    <section id="profiles" className="py-56 relative" ref={ref}>
      {/* Amber glow orbs */}
      <div className="glow-orb w-[420px] h-[420px] top-10 right-[-80px] bg-amber-500/8 pointer-events-none" />
      <div className="glow-orb w-[300px] h-[300px] bottom-10 left-[-60px] bg-yellow-500/6 pointer-events-none" />

      <div className="section-container">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-amber-400 text-xs font-bold tracking-[0.22em] uppercase mb-3">
            Find Me Online
          </p>
          <h2 className="section-heading text-white mb-4">
            Coding{' '}
            <span style={{
              background: 'linear-gradient(130deg, #fbbf24 0%, #f59e0b 50%, #fde68a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Profiles
            </span>
          </h2>
          <div className="w-14 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-transparent" />
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`
                group flex flex-col gap-3 p-5 rounded-2xl
                bg-gradient-to-br ${p.gradient}
                border ${p.border}
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(251,191,36,0.12)]
                hover:border-amber-400/40
              `}
            >
              {/* Icon + external link arrow */}
              <div className="flex items-start justify-between">
                <div className={`w-11 h-11 rounded-xl ${p.iconBg} flex items-center justify-center ${p.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {p.icon}
                </div>
                <svg
                  className="w-3.5 h-3.5 text-slate-700 group-hover:text-amber-400 transition-colors mt-1"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </div>

              {/* Name */}
              <div>
                <h3 className="font-['Outfit'] font-bold text-white text-sm group-hover:text-amber-100 transition-colors">
                  {p.name}
                </h3>
                <p className={`text-xs font-semibold mt-0.5 ${p.handleColor}`}>{p.handle}</p>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-[11px] leading-relaxed">{p.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
