export default function Footer() {
  return (
    <footer className="mt-40 px-6 max-w-7xl mx-auto border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2 opacity-50">
        <div className="w-10 h-10 bg-brand-500 rounded-lg rotate-12 flex items-center justify-center">
          <span className="text-[14px] font-bold text-black font-display">wtf</span>
        </div>
        <span className="text-xs font-display font-bold">whattheflat</span>
      </div>
      <p className="text-xs text-zinc-600">&copy; {new Date().getFullYear()} whattheflat. Built with love for the community.</p>
      {/* <div className="flex gap-6 text-xs text-zinc-600 font-medium">
        <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
        <a href="#" className="hover:text-zinc-400">Terms of Service</a>
        <a href="#" className="hover:text-zinc-400">Contact</a>
      </div> */}
    </footer>
  );
}
