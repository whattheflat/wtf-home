export default function StatsCard() {
  return (
    <div className="bento-card flex flex-col justify-between">
      <div className="text-4xl font-display font-bold text-white">10k+</div>
      <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Downloads</div>
      <div className="mt-4 flex -space-x-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-calm-card" />
        ))}
        <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-[10px] font-bold text-black border-2 border-calm-card">
          +9k
        </div>
      </div>
    </div>
  );
}
