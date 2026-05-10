import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronRight, TrendingUp } from 'lucide-react';
import profilePhoto from "../assets/Brichard.jpg";
import cvFile from "../assets/CV - Brichard RANDRIANARIVO.pdf";

const stats = [
  { label: 'Années d’expérience', value: '3+', icon: TrendingUp },
];

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Contrôleur de Gestion | Finance & Performance Analyst";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Financial Background Animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
           <motion.path
             initial={{ pathLength: 0, opacity: 0 }}
             animate={{ pathLength: 1, opacity: 1 }}
             transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
             d="M0,500 Q250,400 500,500 T1000,500"
             fill="none"
             stroke="url(#grad1)"
             strokeWidth="2"
           />
           <defs>
             <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="#D4AF37" />
               <stop offset="100%" stopColor="#0A192F" />
             </linearGradient>
           </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                RANDRIANARIVO <br />
                <span className="text-gradient-gold">FANOMEZANTSOA CIONIE BRICHARD</span>
              </h1>
              <div className="h-8 mb-6">
                <p className="text-xl md:text-2xl text-slate-400 font-light italic">
                  {text}<span className="animate-pulse">|</span>
                </p>
              </div>
              <p className="text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed mx-auto lg:mx-0">
                Rigoureux, ambitieux, déterminé et analytique, avec une forte capacité d’adaptation et de pilotage de la performance financière au service de la stratégie exécutive.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href={cvFile}
                  download="CV_Brichard_Randrianarivo.pdf"
                  className="px-8 py-3 bg-brand-secondary text-brand-primary font-bold rounded-lg flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-lg"
                >
                  <Download size={18} />
                  Télécharger CV
                </a>
                <a
                  href="/#contact"
                  className="px-8 py-3 border border-brand-secondary text-brand-secondary font-bold rounded-lg flex items-center gap-2 hover:bg-brand-secondary hover:text-brand-primary transition-all"
                >
                  <Mail size={18} />
                  Me contacter
                </a>
                <a href="#experience" className="px-8 py-3 text-slate-300 font-medium flex items-center gap-2 hover:text-brand-secondary transition-all">
                  Voir parcours <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Photo Placeholder */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-brand-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-2xl border-2 border-brand-secondary/30 overflow-hidden glass-card">
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-transparent"></div>
                 {/* Replace with real image when available */}
                 <img
                    src={profilePhoto}
                    alt="Brichard Randrianarivo"
                    className="w-full h-full object-cover"
                  />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-6 text-center hover:border-brand-secondary/50 transition-colors group">
              <div className="flex justify-center mb-4">
                <stat.icon className="text-brand-secondary group-hover:scale-110 transition-transform" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
