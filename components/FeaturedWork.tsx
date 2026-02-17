"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FeaturedWork() {
  const projects = [
    {
      title: "Golden Hour",
      category: "Portfolio & Brand",
      desc: "A company portfolio website showcasing software solutions, photography, and graphic design work—crafted with a clean, modern interface to present creative and technical capabilities in one cohesive brand presence.",
      link: "https://goldenhour265.com",
      color: "bg-amber-500",
      image: "/projects/goldenhour.png",
      stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"]
    },
    {
      title: "AgriSmart",
      category: "Intelligent Agri-Tech",
      desc: "An AI-powered diagnostic platform helping farmers identify crop diseases and pests. Features ML-driven yield prediction and localized weather forecasting to optimize agricultural productivity.",
      link: "https://crop-advisory-delta.vercel.app/",
      color: "bg-emerald-500",
      image: "/projects/agrismart.png",
      stack: ["Next.js", "FastAPI", "Python", "Render", "Vercel"]
    },
    {
      title: "Stand For Children",
      category: "Full-Stack Personal Project",
      desc: "A headless WordPress implementation reflecting high-performance decoupled architecture. Engineered to demonstrate complex data fetching with GraphQL and modern UI patterns in a personal project context.",
      link: "https://save-the-children-pied.vercel.app/",
      color: "bg-red-500",
      image: "/projects/standforchildren.png",
      stack: ["Next.js", "WordPress / GraphQL", "Vercel", "Tailwind"]
    },
    {
      title: "Next Level Pharmacy",
      category: "POS & Inventory System",
      desc: "A lightweight inventory and POS system engineered for zero-cost deployment, leveraging free hosting and MySQL to deliver practical business value under real budget constraints.",
      link: "https://next-level.gt.tc",
      color: "bg-blue-500",
      image: "/projects/nextlevel.png",
      stack: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "InfinityFree"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white overflow-hidden">
       <div className="max-w-7xl mx-auto px-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row justify-between items-end mb-16"
            >
                <div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Featured Work</h2>
                    <p className="text-slate-500 text-lg">Selected projects delivering real impact.</p>
                </div>
                <a href="https://github.com/ak47gt18" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-slate-900 hover:text-[#FF6F3C] transition-colors font-bold uppercase tracking-wider text-sm mt-6 md:mt-0">
                    View All Projects <ArrowRight size={18} />
                </a>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((p, i) => (
                    <motion.a 
                        key={i} 
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                        className="group relative flex flex-col h-full rounded-[2.5rem] overflow-hidden border border-slate-200 bg-white hover:shadow-2xl hover:border-slate-300 transition-all duration-500 hover:-translate-y-2"
                    >
                        {/* Screenshot Wrapper */}
                        <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100 relative">
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500 z-10" />
                            {p.image ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img 
                                src={p.image} 
                                alt={p.title}
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                              />
                            ) : (
                              <div className={`w-full h-full ${p.color} opacity-20`} />
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow relative">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6F3C] mb-2">
                                {p.category}
                            </span>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#FF6F3C] transition-colors">
                                {p.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed mb-6 line-clamp-3">
                                {p.desc}
                            </p>
                            
                            <div className="mt-auto pt-6 border-t border-slate-100">
                                <div className="flex flex-wrap gap-2">
                                    {p.stack.map((tech, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-slate-100">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute top-8 right-8 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                <ArrowRight size={18} className="text-[#FF6F3C]" />
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
       </div>
    </section>
  );
}
