import { Twitter, Github } from "lucide-react";

export default function SocialNewsletter() {
  return (
    <div className="md:col-span-2 bento-card flex items-center justify-center gap-8">
      <a href="#" className="flex flex-col items-center gap-2 group">
        <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
          <Twitter size={24} />
        </div>
        <span className="text-xs font-bold text-zinc-500">Twitter</span>
      </a>
      <a href="#" className="flex flex-col items-center gap-2 group">
        <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
          <Github size={24} />
        </div>
        <span className="text-xs font-bold text-zinc-500">GitHub</span>
      </a>
      <div className="h-12 w-[1px] bg-white/10" />
      <div className="flex-1">
        <p className="text-xs font-bold text-zinc-500 mb-2 uppercase tracking-widest">Stay updated</p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email address"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-500/50 flex-1"
          />
          <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-sm font-bold transition-colors">Join</button>
        </div>
      </div>
    </div>
  );
}
