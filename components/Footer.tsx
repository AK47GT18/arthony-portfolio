"use client";

import { Github, Instagram, Mail, Phone, MessageCircle, ArrowUpRight, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 bg-white border-t border-slate-200">
      {/* CTA Banner */}
      <div className="border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
            Let&apos;s build something <span className="text-[#FF6F3C]">great.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10">
            Got a project in mind? I&apos;m always open to discussing new opportunities, creative ideas, or just having a chat.
          </p>
          <a
            href="mailto:arthonykanjira444@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6F3C] text-white font-bold rounded-full hover:bg-[#e65100] transition-colors shadow-lg shadow-orange-500/20 text-lg"
          >
            Get In Touch <ArrowUpRight size={20} />
          </a>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 bg-[#FF6F3C] rounded-lg flex items-center justify-center text-white font-black text-base shadow-lg shadow-orange-500/10 group-hover:scale-110 transition-transform duration-300">
                A
              </div>
              <span className="text-xl font-bold font-mono tracking-tighter text-slate-900">
                Arthony<span className="text-[#FF6F3C]">.</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Full-Stack Product Engineer building high-performance web applications and scalable backend systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {["Services", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-[#FF6F3C] transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Connect</h4>
            <div className="space-y-3">
              <a href="mailto:arthonykanjira444@gmail.com" className="flex items-center gap-3 text-slate-500 hover:text-[#FF6F3C] transition-colors text-sm font-medium">
                <Mail size={16} /> arthonykanjira444@gmail.com
              </a>
              <a href="tel:+265885620896" className="flex items-center gap-3 text-slate-500 hover:text-[#FF6F3C] transition-colors text-sm font-medium">
                <Phone size={16} /> +265 885 620 896
              </a>
              <a href="https://wa.me/265885620896" target="_blank" className="flex items-center gap-3 text-slate-500 hover:text-[#FF6F3C] transition-colors text-sm font-medium">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a href="https://github.com/ak47gt18" target="_blank" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#FF6F3C] hover:border-[#FF6F3C] transition-all">
                <Github size={18} />
              </a>
              <a href="https://instagram.com/arthony47?igsh" target="_blank" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#FF6F3C] hover:border-[#FF6F3C] transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Arthony Kanjira. All rights reserved.
          </p>
          <p className="text-slate-400 text-xs flex items-center gap-1">
            Crafted with <Heart size={12} className="text-[#FF6F3C]" /> in Malawi
          </p>
        </div>
      </div>
    </footer>
  );
}
