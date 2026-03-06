import { Heart } from "lucide-react";

export default function MissionCard() {
  return (
    <>
      <Heart className="text-brand-500 mb-4" size={32} />
      <h3 className="text-xl font-display font-bold text-white mb-2">Non-Profit</h3>
      <p className="text-sm text-zinc-400">We build because we love software. Every app is free, open-source, and privacy-first.</p>
    </>
  );
}
