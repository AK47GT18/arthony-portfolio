"use client";

import { Download, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 inset-x-0 z-50 px-6">
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md border border-slate-200 rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-black/5">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#FF6F3C] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
            A
          </div>
          <span className="text-xl font-bold font-mono tracking-tighter text-slate-900 hidden sm:block">
            Arthony<span className="text-[#FF6F3C]">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
           {["Services", "Projects", "About", "Contact"].map((item) => (
             <Link 
               key={item} 
               href={`#${item.toLowerCase()}`}
               className="hover:text-[#FF6F3C] transition-colors"
             >
               {item}
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
            
            <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
                <Menu />
            </button>
        </div>
      </div>
    </nav>
  );
}
