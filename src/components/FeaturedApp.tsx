import { Download, ExternalLink, Music } from "lucide-react";
import { motion } from "motion/react";

export default function FeaturedApp() {
  return (
    <>
      <div className="flex-[0.6] z-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-brand-500/10 text-brand-500 text-xs font-bold rounded-full uppercase tracking-wider">
            Featured App
          </span>
          <span className="text-zinc-500 text-xs font-medium">v0.6.2</span>
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
            className="bg-white text-black px-12 py-4 rounded-2xl font-bold hover:bg-brand-400 transition-colors group/btn flex flex-col items-center justify-center min-w-[220px]"
          >
            <div className="flex items-center gap-2">
              <Download size={20} />
              <span>Download for Free</span>
            </div>
            <span className="text-xs opacity-50 mt-2 block">macOS / Win / Ubuntu</span>
          </a>
        </div>
      </div>
      <div className="flex-[1.4] w-full h-full min-h-[400px] relative">
        <div className="absolute inset-4 glass rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src="/jambuddy-demo.gif"
            alt="JamBuddy demo"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
}
