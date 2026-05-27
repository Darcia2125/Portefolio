import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: "INVISO-GROUP",
    role: "Contrôleur de gestion",
    period: "Juin 2023 – Aujourd’hui",
    location: "Antananarivo, Madagascar",
    missions: [
      "Reporting mensuel & Analyse de la marge",
      "Contrôle des stocks & Analyse des écarts budgétaires",
      "Réconciliation des comptes intra-groupe",
      "Analyse industrielle"
    ]
  },
  {
    company: "VESEO",
    role: "Stage perfectionnement contrôle de gestion",
    period: "Janvier 2023 – Avril 2023",
    location: "Antananarivo",
    missions: [
      "Appui au contrôle budgétaire",
      "Participation aux clôtures mensuelles",
      "Optimisation des fichiers de suivi Excel"
    ]
  },
  {
    company: "ESANANDRO / ETECH",
    role: "Job étudiant",
    period: "Février 2022 – Mars 2022",
    location: "Antananarivo",
    missions: [
      "saisie et revue des écritures comptables",
      "Support aux équipes opérationnelles"
    ]
  },
  {
    company: "SMARTONE ANKORONDRANO",
    role: "Stage d'observation",
    period: "Octobre 2019",
    location: "Antananarivo",
    missions: ["Immersion dans le métier de contrôleur de gestion"]
  },
  {
    company: "ADES FIANARANTSOA",
    role: "Stage d'observation",
    period: "Avril 2015",
    location: "Fianarantsoa",
    missions: ["Découverte des processus administratifs"]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-brand-accent/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-secondary uppercase tracking-[0.3em] text-sm font-bold mb-4">Parcours</h2>
          <h3 className="text-4xl font-bold text-white">Expérience Professionnelle</h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-brand-secondary/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-brand-secondary border-4 border-brand-primary z-10"></div>

                {/* Content Card */}
                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass-card p-6 hover:border-brand-secondary/40 transition-colors">
                    <div className="flex items-center gap-2 text-brand-secondary mb-2">
                      <Briefcase size={16} />
                      <span className="text-xs font-bold uppercase tracking-wider">{exp.company}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{exp.role}</h4>
                    <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-4">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.missions.map((mission, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-2 text-slate-300 text-sm">
                          <CheckCircle2 size={14} className="text-brand-secondary mt-1 shrink-0" />
                          <span>{mission}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
