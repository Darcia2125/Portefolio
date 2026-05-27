import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Target, Zap, Shield } from 'lucide-react';

const kpis = [
  { title: "Analyse Financière", desc: "Expertise approfondie dans l'interprétation des données.", icon: PieChart },
  { title: "Optimisation des coûts", desc: "Stratégies éprouvées pour maximiser l'efficacité opérationnelle.", icon: Zap },
  { title: "Reporting Stratégique", desc: "Tableaux de bord d'aide à la décision pour l'exécutif.", icon: Target },
  { title: "Contrôle Budgétaire", desc: "Rigueur et précision dans le suivi des ressources.", icon: Shield },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-slate-900/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-secondary uppercase tracking-[0.3em] text-sm font-bold mb-4">À Propos</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              L'excellence analytique au service de la <span className="text-gradient-gold">performance financière.</span>
            </h3>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Spécialiste de la finance avec une solide expertise en contrôle de gestion, je transforme les chiffres en leviers stratégiques. Mon approche combine rigueur analytique et vision globale pour accompagner les entreprises dans leur croissance.
              </p>
              <p>
                Bonne maîtrise des ERP tels que <strong> (Sage 100, X3)</strong> avec des bases en outils de Business Intelligence, je mets en place des systèmes de reporting fluides qui permettent une prise de décision basée sur des données fiables et en temps réel.
              </p>
              <p>
                Mon parcours est marqué par une volonté constante d'amélioration continue et d'optimisation des ressources, garantissant une rentabilité durable et une gestion saine des risques.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kpis.map((kpi, idx) => (
              <motion.div
                key={idx}
                className="glass-card p-8 group hover:bg-brand-secondary/5 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-brand-secondary/10 flex items-center justify-center mb-6 text-brand-secondary group-hover:bg-brand-secondary group-hover:text-brand-primary transition-all">
                  <kpi.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{kpi.title}</h4>
                <p className="text-slate-400 text-sm">{kpi.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
