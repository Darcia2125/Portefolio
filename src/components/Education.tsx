import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: "MASTER II en Finances – Comptabilité & Audit",
    school: "CNTEMAD",
    year: "2024–2025",
    details: "Spécialisation avancée en ingénierie financière et contrôle de gestion stratégique."
  },
  {
    degree: "Licence en Sciences de Gestion",
    school: "ESCA Antanimena",
    year: "2021–2022",
    details: "Mention Finance – Comptabilité. Formation rigoureuse aux fondamentaux du management."
  },
  {
    degree: "Programme SESAME",
    school: "PROMES",
    year: "2019",
    details: "Programme d'excellence pour l'accompagnement des hauts potentiels."
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-slate-900">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-secondary uppercase tracking-[0.3em] text-sm font-bold mb-4">Formation</h2>
            <h3 className="text-4xl font-bold text-white">Parcours Académique d'Excellence</h3>
          </div>
          <div className="text-slate-400 font-medium italic border-l-2 border-brand-secondary pl-4">
            "L'apprentissage continu est la clé de l'adaptabilité stratégique."
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-b from-brand-secondary/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative glass-card p-8 h-full flex flex-col border-white/5 group-hover:border-brand-secondary/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-brand-secondary mb-6 group-hover:scale-110 transition-transform">
                  {idx === 0 ? <Award size={28} /> : (idx === 1 ? <GraduationCap size={28} /> : <BookOpen size={28} />)}
                </div>
                <span className="text-brand-secondary font-bold text-sm mb-2">{item.year}</span>
                <h4 className="text-xl font-bold text-white mb-4 leading-snug">{item.degree}</h4>
                <p className="text-slate-500 font-semibold mb-4">{item.school}</p>
                <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
