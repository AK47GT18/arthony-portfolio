"use client";
import { motion } from "framer-motion";
import { Lightbulb, Shield, Zap, Box } from "lucide-react";

export function CorePhilosophy() {
  const philosophies = [
    {
        title: "Constraints First",
        desc: "I don't write a line of code until I understand the bandwidth, the data volume, and the user's hardware.",
        icon: Box
    },
    {
        title: "Fault Tolerance",
        desc: "Happy paths are easy. I design for the 1% of the time when the API fails or the network drops.",
        icon: Shield
    },
    {
        title: "Simplicity Scaling",
        desc: "Complexity is tech debt. I prefer a boring, robust solution over a clever, fragile one.",
        icon: Zap
    },
    {
        title: "Imagination",
        desc: "Logic builds the structure; imagination breathes life into the experience. I code with a user-first creative lens.",
        icon: Lightbulb
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
            <h2 className="text-sm font-bold text-[#FF6F3C] tracking-widest uppercase mb-3">
                01 // Ethos
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8">
                CORE PHILOSOPHY
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {philosophies.map((phil, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                        className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                        <div className="w-12 h-12 bg-orange-50 text-[#FF6F3C] rounded-2xl flex items-center justify-center mb-6">
                            <phil.icon size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-4">{phil.title}</h4>
                        <p className="text-slate-600 font-medium leading-relaxed text-sm">
                            {phil.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
