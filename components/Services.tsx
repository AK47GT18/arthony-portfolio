"use client";

import { Code2, Database, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      title: "Web Engineering",
      desc: "Performant Next.js applications with complex state and responsive UI.",
      icon: Code2,
      color: "from-blue-500/10 to-indigo-500/10",
      iconColor: "text-blue-600",
      borderColor: "group-hover:border-blue-500/30"
    },
    {
      title: "Backend Systems",
      desc: "Robust APIs and data pipelines designed for scale and security.",
      icon: Database,
      color: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-600",
      borderColor: "group-hover:border-emerald-500/30"
    },
    {
      title: "Mobile Solution",
      desc: "Native Android & cross-platform apps that extend your business reach.",
      icon: Smartphone,
      color: "from-orange-500/10 to-red-500/10",
      iconColor: "text-orange-600",
      borderColor: "group-hover:border-orange-500/30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                What I <span className="text-[#FF6F3C]">Do</span>
            </h2>
            <p className="text-slate-500 max-w-xl text-lg">
                Comprehensive engineering solutions tailored to meet unique business needs.
            </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
            {services.map((s, idx) => (
                <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className={`group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${s.borderColor}`}
                >
                    <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                        <s.icon size={32} className={`${s.iconColor}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{s.title}</h3>
                    <p className="text-slate-500 leading-relaxed mb-8">
                        {s.desc}
                    </p>

                </motion.div>
            ))}
        </motion.div>

      </div>
    </section>
  );
}
