import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const FRAME_MANIFEST = [
  "frame_0001_0.00s.png","frame_0002_0.05s.png","frame_0003_0.10s.png","frame_0004_0.15s.png",
  "frame_0005_0.20s.png","frame_0006_0.25s.png","frame_0007_0.30s.png","frame_0008_0.35s.png",
  "frame_0009_0.40s.png","frame_0010_0.45s.png","frame_0011_0.50s.png","frame_0012_0.55s.png",
  "frame_0013_0.60s.png","frame_0014_0.65s.png","frame_0015_0.70s.png","frame_0016_0.75s.png",
  "frame_0017_0.80s.png","frame_0018_0.85s.png","frame_0019_0.90s.png","frame_0020_0.95s.png",
  "frame_0021_1.00s.png","frame_0022_1.05s.png","frame_0023_1.10s.png","frame_0024_1.15s.png",
  "frame_0025_1.20s.png","frame_0026_1.25s.png","frame_0027_1.30s.png","frame_0028_1.35s.png",
  "frame_0029_1.40s.png","frame_0030_1.45s.png","frame_0031_1.50s.png","frame_0032_1.55s.png",
  "frame_0033_1.60s.png","frame_0034_1.65s.png","frame_0035_1.70s.png","frame_0036_1.75s.png",
  "frame_0037_1.80s.png","frame_0038_1.85s.png","frame_0039_1.90s.png","frame_0040_1.95s.png",
  "frame_0041_2.00s.png","frame_0042_2.05s.png","frame_0043_2.10s.png","frame_0044_2.15s.png",
  "frame_0045_2.20s.png","frame_0046_2.25s.png","frame_0047_2.30s.png","frame_0048_2.35s.png",
  "frame_0049_2.40s.png","frame_0050_2.45s.png","frame_0051_2.50s.png","frame_0052_2.55s.png",
  "frame_0053_2.60s.png","frame_0054_2.65s.png","frame_0055_2.70s.png","frame_0056_2.75s.png",
  "frame_0057_2.80s.png","frame_0058_2.85s.png","frame_0059_2.90s.png","frame_0060_2.95s.png",
  "frame_0061_3.00s.png","frame_0062_3.05s.png","frame_0063_3.10s.png","frame_0064_3.15s.png",
  "frame_0065_3.20s.png","frame_0066_3.25s.png","frame_0067_3.30s.png","frame_0068_3.35s.png",
  "frame_0069_3.40s.png","frame_0070_3.45s.png","frame_0071_3.50s.png","frame_0072_3.55s.png",
  "frame_0073_3.60s.png","frame_0074_3.65s.png","frame_0075_3.70s.png","frame_0076_3.75s.png",
  "frame_0077_3.80s.png","frame_0078_3.85s.png","frame_0079_3.90s.png","frame_0080_3.95s.png",
  "frame_0081_4.00s.png","frame_0082_4.05s.png","frame_0083_4.10s.png","frame_0084_4.15s.png",
  "frame_0085_4.20s.png","frame_0086_4.25s.png","frame_0087_4.30s.png","frame_0088_4.35s.png",
  "frame_0089_4.40s.png","frame_0090_4.45s.png","frame_0091_4.50s.png","frame_0092_4.55s.png",
  "frame_0093_4.60s.png","frame_0094_4.65s.png","frame_0095_4.70s.png","frame_0096_4.75s.png",
  "frame_0097_4.80s.png","frame_0098_4.85s.png","frame_0099_4.90s.png","frame_0100_4.95s.png",
  "frame_0101_5.00s.png","frame_0102_5.05s.png","frame_0103_5.10s.png","frame_0104_5.15s.png",
  "frame_0105_5.20s.png","frame_0106_5.25s.png","frame_0107_5.30s.png","frame_0108_5.35s.png",
  "frame_0109_5.40s.png","frame_0110_5.45s.png","frame_0111_5.50s.png","frame_0112_5.55s.png",
  "frame_0113_5.60s.png","frame_0114_5.65s.png","frame_0115_5.70s.png","frame_0116_5.75s.png",
  "frame_0117_5.80s.png","frame_0118_5.85s.png","frame_0119_5.90s.png","frame_0120_5.95s.png",
  "frame_0121_6.00s.png","frame_0122_6.05s.png","frame_0123_6.10s.png","frame_0124_6.15s.png",
  "frame_0125_6.20s.png","frame_0126_6.25s.png","frame_0127_6.30s.png","frame_0128_6.35s.png",
  "frame_0129_6.40s.png","frame_0130_6.45s.png","frame_0131_6.50s.png","frame_0132_6.55s.png",
  "frame_0133_6.60s.png","frame_0134_6.65s.png","frame_0135_6.70s.png","frame_0136_6.75s.png",
  "frame_0137_6.80s.png","frame_0138_6.85s.png","frame_0139_6.90s.png","frame_0140_6.95s.png",
  "frame_0141_7.00s.png","frame_0142_7.05s.png","frame_0143_7.10s.png","frame_0144_7.15s.png",
  "frame_0145_7.20s.png","frame_0146_7.25s.png","frame_0147_7.30s.png","frame_0148_7.35s.png",
  "frame_0149_7.40s.png","frame_0150_7.45s.png","frame_0151_7.50s.png","frame_0152_7.55s.png",
  "frame_0153_7.60s.png","frame_0154_7.65s.png","frame_0155_7.70s.png","frame_0156_7.75s.png",
  "frame_0157_7.80s.png","frame_0158_7.85s.png","frame_0159_7.90s.png","frame_0160_7.95s.png",
  "frame_0161_8.00s.png",
]

const TOTAL_FRAMES = FRAME_MANIFEST.length

export default function Hero() {
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const frameIndexRef = useRef(0)
  const animFrameRef = useRef(null)
  const lastTimeRef = useRef(0)
  const [loaded, setLoaded] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)

  /* ── Preload frames ── */
  useEffect(() => {
    let count = 0
    const imgs = []
    const onProgress = () => {
      count++
      setLoadProgress(Math.round((count / TOTAL_FRAMES) * 100))
      if (count === TOTAL_FRAMES) setLoaded(true)
    }
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image()
      img.src = `/frames/${FRAME_MANIFEST[i]}`
      img.onload = onProgress
      img.onerror = onProgress
      imgs.push(img)
    }
    imagesRef.current = imgs
  }, [])

  /* ── Canvas loop at 20 fps ── */
  useEffect(() => {
    if (!loaded) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const INTERVAL = 1000 / 20   // 20 fps

    const render = (ts) => {
      if (ts - lastTimeRef.current >= INTERVAL) {
        lastTimeRef.current = ts
        const img = imagesRef.current[frameIndexRef.current]
        if (img?.complete && img.naturalWidth > 0) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        }
        frameIndexRef.current = (frameIndexRef.current + 1) % TOTAL_FRAMES
      }
      animFrameRef.current = requestAnimationFrame(render)
    }
    animFrameRef.current = requestAnimationFrame(render)
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [loaded])

  const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }
  const item = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

      {/* ═══════════════════════════════════
          LAYER 0 — Full-screen BG canvas
      ═══════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        {/* Loading shimmer */}
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#08090b] gap-5">
            <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="34" fill="none" stroke="#2a1f0a" strokeWidth="5"/>
              <circle
                cx="40" cy="40" r="34" fill="none"
                stroke="url(#pg)" strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="213.6"
                strokeDashoffset={`${213.6 * (1 - loadProgress / 100)}`}
                style={{ transition: 'stroke-dashoffset 0.25s ease' }}
              />
              <defs>
                <linearGradient id="pg" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#fbbf24"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="text-stone-400 text-sm tracking-wider">Loading {loadProgress}%</span>
          </div>
        )}

        {/* Canvas — covers entire section */}
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          style={{ display: loaded ? 'block' : 'none', objectPosition: 'center right' }}
        />

        {/* Dark overlay: left heavy, right lighter — ensures text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090b]/95 via-[#08090b]/75 to-[#08090b]/30" />
        {/* Bottom fade into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#08090b] to-transparent" />
        {/* Subtle grid on top */}
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* ═══════════════════════════════════
          LAYER 1 — Ambient glow orbs
      ═══════════════════════════════════ */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="glow-orb w-[600px] h-[600px] top-[-200px] left-[-200px] bg-yellow-500/18 animate-pulse-glow" />
        <div className="glow-orb w-[400px] h-[400px] bottom-[-100px] left-[20%] bg-amber-600/12 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* ═══════════════════════════════════
          LAYER 2 — Foreground text content
      ═══════════════════════════════════ */}
      <div className="relative z-[2] section-container w-full pt-32 pb-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-2xl flex flex-col gap-6"
        >
          {/* Status pill */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold bg-yellow-500/12 border border-yellow-500/28 text-yellow-300 tracking-wide backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={item}>
            <h1 className="font-['Outfit'] font-black tracking-tight leading-[1.05] drop-shadow-2xl"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
              <span className="text-white">Lahari</span>
              <br />
              <span className="gradient-text">Raaparthi</span>
            </h1>
          </motion.div>

          {/* Role chips */}
          <motion.div variants={item} className="flex flex-wrap gap-2">
            {['MERN Stack Developer', 'AI Enthusiast', 'Full Stack Engineer'].map((r) => (
              <span key={r}
                className="px-3 py-1.5 rounded-lg bg-white/8 border border-white/10 text-slate-200 text-xs font-medium tracking-wide backdrop-blur-sm">
                {r}
              </span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.div variants={item}>
            <p className="text-stone-300 text-[1.08rem] leading-[2.0] max-w-[540px] drop-shadow-md">
              Building scalable web applications with the MERN stack, crafting AI-powered products, and solving real-world problems through clean, purposeful engineering.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 pt-1">
            <a href="#projects" className="btn-primary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              View Projects
            </a>
            <a href="https://github.com/lahari936" target="_blank" rel="noopener noreferrer" className="btn-secondary backdrop-blur-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/lahari-raaparthi-605bb9308" target="_blank" rel="noopener noreferrer" className="btn-secondary backdrop-blur-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://drive.google.com/file/d/1OGjH88S_AHaY29qlqbNr-VJ4To3TgeJG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-secondary backdrop-blur-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Resume
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={item}
            className="flex gap-10 pt-6 mt-3 border-t border-yellow-500/12">
            {[['10+', 'Projects'], ['9.4', 'SGPA'], ['2', 'Internships']].map(([val, label]) => (
              <div key={label}>
                <div className="font-['Outfit'] text-2xl font-black gradient-text">{val}</div>
                <div className="text-stone-500 text-xs mt-1 tracking-wide">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[2]">
        <span className="text-stone-600 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-stone-700 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-1 h-1 rounded-full bg-yellow-400"
          />
        </div>
      </motion.div>
    </section>
  )
}
