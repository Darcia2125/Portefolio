import React from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const skills = [
  { name: 'Excel Avancé', level: 90 },
  { name: 'Sage 100', level: 80 },
  { name: 'ERP X3', level: 85 },
  { name: 'PowerPoint', level: 85 },
  { name: 'Financial Analysis', level: 90 },
];

const radarData = skills.map(s => ({ subject: s.name, A: s.level, fullMark: 100 }));

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-slate-900/50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-brand-secondary uppercase tracking-[0.3em] text-sm font-bold mb-4">Compétences</h2>
            <h3 className="text-4xl font-bold text-white mb-8">Maîtrise Technique & <span className="text-gradient-gold">Outils Décisionnels</span></h3>
            
            <div className="space-y-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-200 font-medium">{skill.name}</span>
                    <span className="text-brand-secondary font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-brand-secondary to-[#F9E29C]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full h-[400px] glass-card p-6 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Radar
                  name="Compétences"
                  dataKey="A"
                  stroke="#D4AF37"
                  fill="#D4AF37"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
