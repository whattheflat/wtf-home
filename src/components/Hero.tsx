import { motion } from "motion/react";

export default function Hero() {
  return (
    <header className="pt-20 pb-10 px-6 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter mb-6">
          Simple apps.<br />
          <span className="text-brand-500 italic">Handy</span> tools.
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          We're a non-profit software boutique crafting minimalist desktop experiences that just work. No tracking, no ads, just utility.
        </p>
      </motion.div>
    </header>
  );
}
