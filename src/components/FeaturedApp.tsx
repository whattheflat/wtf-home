import { Download, ExternalLink, Music } from "lucide-react";
import { motion } from "motion/react";

export default function FeaturedApp() {
  return (
    <>
      <div className="flex-1 z-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-brand-500/10 text-brand-500 text-xs font-bold rounded-full uppercase tracking-wider">
            Featured App
          </span>
          <span className="text-zinc-500 text-xs font-medium">v1.0.0</span>
        </div>
        <h2 className="text-4xl font-display font-bold text-white mb-4">JamBuddy</h2>
        <p className="text-zinc-400 mb-8 leading-relaxed">
          The ultimate companion for musicians. JamBuddy lets you easily find the chords, scales, and tempo of any song by simply playing it. Perfect for jamming, learning, and creating music on the fly.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/whattheflat/whattheflat/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-brand-400 transition-colors group/btn"
          >
            <Download size={20} />
            Download for Free
            <span className="text-xs opacity-50 ml-2">macOS / Win</span>
          </a>
        </div>
      </div>
      <div className="flex-1 w-full h-full min-h-[300px] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-transparent rounded-2xl" />
        <div className="absolute inset-4 glass rounded-xl flex items-center justify-center overflow-hidden">
          <Music size={120} className="text-brand-500 opacity-20 absolute -right-10 -bottom-10 rotate-12" />
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scaleY: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  className="w-2 h-10 bg-brand-500 rounded-full origin-bottom"
                />
              ))}
            </div>
            <span className="text-xs font-mono text-zinc-500">JAMMING IN SYNC...</span>
          </div>
        </div>
      </div>
    </>
  );
}
