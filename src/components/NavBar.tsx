import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Github } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleDocClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleDocClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleDocClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 flex justify-center p-6 pointer-events-none">
      <motion.div
        ref={containerRef}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`glass rounded-full flex items-center pointer-events-auto ${open ? "px-6 py-3 gap-8" : "px-3 py-2 gap-3"}`}
      >
        <button
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 bg-transparent border-0 p-0"
        >
          <div className="w-10 h-10 bg-brand-500 rounded-lg rotate-12 flex items-center justify-center">
            <span className="text-[14px] font-bold text-black font-display">wtf</span>
          </div>
          {open && <span className="hidden sm:inline font-display font-bold text-white tracking-tight">whattheflat</span>}
        </button>

        {open && (
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/whattheflat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center text-white"
            >
              <Github size={24} className="w-6 h-6" />
            </a>
            <a
              href="https://dataaigency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center"
            >
              <img src="/da.svg" alt="dataaigency" className="w-8 h-8 rounded-full" />
            </a>
            <a
              href="https://jamestwose.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center"
            >
              <img src="/jms.svg" alt="JT" className="w-8 h-8 rounded-full" />
            </a>
          </div>
        )}
      </motion.div>
    </nav>
  );
}
