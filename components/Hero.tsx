"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Instagram, Mail, Phone, MessageCircle, Code, Database, Globe } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "I am a final year Computer Engineering student based in Malawi.\n\nMy work sits at the intersection of software engineering and intelligent systems. I take problems from whiteboard to production, handling architecture, implementation, and deployment—not just code syntax.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 30); // Typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-40 lg:pt-20 overflow-hidden">
      
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text */}
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-2"
            >
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                    Hello, I am <br />
                    <span className="text-[#FF6F3C]">Arthony Kanjira.</span>
                </h1>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-slate-500 max-w-lg text-lg leading-relaxed font-medium min-h-[120px]"
            >
                <span className="whitespace-pre-wrap">{text}</span>
                <span className="inline-block w-1 h-5 bg-[#FF6F3C] ml-1 animate-pulse"/>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-6"
            >
                {/* Socials / Contact Grid */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4">
                     <a href="https://github.com/ak47gt18" target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-[#FF6F3C] transition-colors text-sm font-medium bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                        <Github size={16} /> GitHub
                     </a>
                     <a href="https://instagram.com/arthony47?igsh" target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-[#FF6F3C] transition-colors text-sm font-medium bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                        <Instagram size={16} /> Instagram
                     </a>
                     <a href="https://wa.me/265885620896" target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-[#FF6F3C] transition-colors text-sm font-medium bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                        <MessageCircle size={16} /> WhatsApp
                     </a>
                     <a href="mailto:arthonykanjira444@gmail.com" className="flex items-center gap-2 text-slate-500 hover:text-[#FF6F3C] transition-colors text-sm font-medium bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                        <Mail size={16} /> Email
                     </a>
                     <a href="tel:+265885620896" className="flex items-center gap-2 text-slate-500 hover:text-[#FF6F3C] transition-colors text-sm font-medium bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                        <Phone size={16} /> Phone
                     </a>
                </div>
            </motion.div>
        </div>

        {/* Right Column: Code Editor + Floating Stats */}
        <div className="hidden lg:flex items-center justify-center relative">
          
          {/* Code Editor Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateY: -5 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="w-full max-w-md bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50"
          >
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-slate-500 text-xs font-mono">portfolio.tsx</span>
            </div>
            
            {/* Code Content */}
            <div className="p-5 font-mono text-sm leading-relaxed">
              <div className="text-slate-500">{'// Building the future, one line at a time'}</div>
              <div className="mt-2">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-300">developer</span>{' '}
                <span className="text-slate-400">=</span>{' '}
                <span className="text-amber-300">{'{'}</span>
              </div>
              <div className="ml-4">
                <span className="text-green-300">name</span>
                <span className="text-slate-400">:</span>{' '}
                <span className="text-orange-300">&quot;Arthony Kanjira&quot;</span>
                <span className="text-slate-500">,</span>
              </div>
              <div className="ml-4">
                <span className="text-green-300">role</span>
                <span className="text-slate-400">:</span>{' '}
                <span className="text-orange-300">&quot;Full-Stack Engineer&quot;</span>
                <span className="text-slate-500">,</span>
              </div>
              <div className="ml-4">
                <span className="text-green-300">stack</span>
                <span className="text-slate-400">:</span>{' '}
                <span className="text-slate-400">[</span>
                <span className="text-orange-300">&quot;React&quot;</span>
                <span className="text-slate-500">,</span>{' '}
                <span className="text-orange-300">&quot;Next.js&quot;</span>
                <span className="text-slate-500">,</span>{' '}
                <span className="text-orange-300">&quot;Python&quot;</span>
                <span className="text-slate-400">]</span>
                <span className="text-slate-500">,</span>
              </div>
              <div className="ml-4">
                <span className="text-green-300">passion</span>
                <span className="text-slate-400">:</span>{' '}
                <span className="text-orange-300">&quot;Clean code &amp; impact&quot;</span>
              </div>
              <div>
                <span className="text-amber-300">{'}'}</span>
                <span className="text-slate-500">;</span>
              </div>
              <div className="mt-3">
                <span className="text-purple-400">export default</span>{' '}
                <span className="text-blue-300">developer</span>
                <span className="text-slate-500">;</span>
              </div>
              <div className="mt-2 text-slate-600 animate-pulse">▊</div>
            </div>
          </motion.div>

          {/* Floating Stat Badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -left-4 top-8 bg-white rounded-2xl shadow-lg border border-slate-100 p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
              <Code size={20} className="text-[#FF6F3C]" />
            </div>
            <div>
              <div className="text-xl font-black text-slate-900">3+</div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Years Exp</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute -right-4 top-16 bg-white rounded-2xl shadow-lg border border-slate-100 p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
              <Globe size={20} className="text-emerald-500" />
            </div>
            <div>
              <div className="text-xl font-black text-slate-900">10+</div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Projects</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -left-2 bottom-4 bg-white rounded-2xl shadow-lg border border-slate-100 p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <Database size={20} className="text-blue-500" />
            </div>
            <div>
              <div className="text-xl font-black text-slate-900">5+</div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Tech Stacks</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
