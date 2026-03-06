import { Coffee, ExternalLink } from "lucide-react";

export default function DonateCard() {
  return (
    <div className="bento-row bg-brand-500/10 border-brand-500/30 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-6">
        {/* <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center rotate-3">
          <Coffee size={32} className="text-black" />
        </div> */}
        <div className="max-w-sm">
          <h3 className="text-2xl font-display font-bold text-white">Support our work</h3>
          <p className="text-zinc-400">Help us keep the servers running and apps free.</p>
        </div>
      </div>
      <a
        href="https://buymeacoffee.com/itsamejms"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-500 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-2 md:w-56 md:justify-center"
      >
        <div id="logo">
          <img src="/bmc.svg" alt="Buy Me a Coffee" className="w-100" />
        </div>
      </a>
    </div>
  );
}
