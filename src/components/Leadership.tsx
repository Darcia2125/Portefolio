import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full border-2 border-brand-secondary/30 flex items-center justify-center text-brand-secondary">
              <Quote size={32} />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display italic text-white mb-10 leading-tight">
            "Le contrôle de gestion n'est pas seulement une fonction de surveillance, c'est le moteur de la <span className="text-gradient-gold">performance stratégique</span> et le garant d'une vision d'avenir claire."
          </h2>

          <div className="flex flex-col items-center">
            <div className="w-12 h-px bg-brand-secondary mb-6"></div>
            <h3 className="text-xl font-bold text-white uppercase tracking-widest">Vision & Leadership</h3>
            <p className="text-slate-400 mt-2">Pilotage stratégique & Culture de performance</p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
            {[
               { title: "Prise de Décision", text: "Basée sur des données objectives et des analyses prédictives." },
               { title: "Culture de Performance", text: "Instaurer une dynamique d'excellence au sein des équipes." },
               { title: "Optimisation", text: "Maximiser la valeur ajoutée de chaque ressource investie." }
            ].map((item, i) => (
              <div key={i} className="p-6 border-l border-brand-secondary/20 bg-white/5">
                <h4 className="text-brand-secondary font-bold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
