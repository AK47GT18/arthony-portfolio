"use client";
import { motion } from "framer-motion";

export function SkillsCloud() {
  const categories = [
    {
      title: "Languages",
      color: "from-orange-500 to-amber-500",
      tools: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      ]
    },
    {
      title: "Frameworks & CMS",
      color: "from-blue-500 to-indigo-500",
      tools: [
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
      ]
    },
    {
      title: "Infrastructure",
      color: "from-emerald-500 to-teal-500",
      tools: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      ]
    },
    {
      title: "Intelligence",
      color: "from-purple-500 to-pink-500",
      tools: [
        { name: "Scikit-Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-[#FF6F3C] tracking-widest uppercase mb-3">
            Technical Arsenal
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Languages & Tools
          </h3>
          <p className="text-slate-500 mt-4 max-w-xl text-lg">
            The technologies I use to bring ideas to production.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              {/* Category Header with gradient accent */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${cat.color}`} />
                <h4 className="text-lg font-bold text-slate-800 uppercase tracking-wider">
                  {cat.title}
                </h4>
                <div className="flex-1 h-px bg-slate-100" />
                <span className="text-sm font-mono text-slate-400">{cat.tools.length} tools</span>
              </div>
              
              {/* Tool Cards with staggered animation */}
              <motion.div 
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {cat.tools.map((tool, tIdx) => (
                  <motion.div 
                    key={tIdx}
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.05 }}
                    className="group flex flex-col items-center justify-center p-3 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#FF6F3C]/50 transition-all duration-300 cursor-default"
                  >
                     <div className="w-11 h-11 mb-3 relative flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src={tool.icon} 
                            alt={tool.name} 
                            className="w-full h-full object-contain" 
                        />
                     </div>
                     <span className="text-[11px] font-bold text-slate-500 group-hover:text-[#FF6F3C] transition-colors text-center leading-tight">
                        {tool.name}
                     </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
