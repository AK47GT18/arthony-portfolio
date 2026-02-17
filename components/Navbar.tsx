"use client";

import { Download, Menu, X, Github, Instagram, MessageCircle, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 inset-x-0 z-50 px-6">
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md border border-slate-200 rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-black/5 relative z-50">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#FF6F3C] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
            A
          </div>
          <span className="text-xl font-bold font-mono tracking-tighter text-slate-900">
            Arthony<span className="text-[#FF6F3C]">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
           {navLinks.map((item) => (
             <Link 
               key={item.name} 
               href={item.href}
               className="hover:text-[#FF6F3C] transition-colors"
             >
               {item.name}
             </Link>
           ))}
        </div>

        {/* Action & Mobile */}
        <div className="flex items-center gap-4">
            <a 
              href="/resume.pdf"
              className="hidden md:flex items-center gap-2 px-5 py-2 bg-[#FF6F3C] text-white font-bold text-xs rounded-full hover:bg-[#e65100] transition-all shadow-orange-glow"
            >
              <span>View Resume</span>
              <Download size={14} />
            </a>
            
            <button 
              className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop (Lighter, doesn't block interaction if we want to allow scrolling, 
                but typically side drawers have backdrops. I'll make it transparent to allow context visibility) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/10 backdrop-blur-[2px] z-40 md:hidden"
            />
            
            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white z-50 md:hidden shadow-2xl border-l border-slate-100 flex flex-col pt-32 p-8"
            >
                <div className="flex flex-col gap-6">
                  {navLinks.map((item) => (
                    <Link 
                      key={item.name} 
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-black text-slate-900 hover:text-[#FF6F3C] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-12 h-px bg-slate-100" />

                <div className="mt-auto pb-12">
                  <a 
                    href="/resume.pdf"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-[#FF6F3C] text-white font-bold rounded-2xl hover:bg-[#e65100] transition-all mb-8 shadow-lg shadow-orange-500/20"
                  >
                    <span>View Resume</span>
                    <Download size={18} />
                  </a>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-6">
                      <a href="https://github.com/ak47gt18" target="_blank" className="text-slate-400 hover:text-[#FF6F3C] transition-colors">
                        <Github size={24} />
                      </a>
                      <a href="https://instagram.com/arthony47" target="_blank" className="text-slate-400 hover:text-[#FF6F3C] transition-colors">
                        <Instagram size={24} />
                      </a>
                    </div>
                  </div>
                  <div className="mt-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Arthony Kanjira Portfolio
                  </div>
                </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
