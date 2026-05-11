export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-yellow-500/8 py-12">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center font-bold text-black text-xs font-['Outfit']">
            LR
          </div>
          <span className="text-stone-500 text-sm">Lahari Raaparthi</span>
        </div>

        <p className="text-stone-600 text-xs text-center">
          © {year} Lahari Raaparthi · Built with React & Tailwind CSS
        </p>

        <div className="flex items-center gap-5">
          <a href="https://github.com/lahari936" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-yellow-400 transition-colors text-sm">GitHub</a>
          <a href="https://linkedin.com/in/lahari-raaparthi-605bb9308" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-yellow-400 transition-colors text-sm">LinkedIn</a>
          <a href="mailto:lahariraparthi1@gmail.com" className="text-stone-600 hover:text-yellow-400 transition-colors text-sm">Email</a>
        </div>
      </div>
    </footer>
  )
}
