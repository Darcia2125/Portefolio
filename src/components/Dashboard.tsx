import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { DollarSign, Activity, PieChart, ArrowUpRight } from 'lucide-react';

const marginData = [
  { month: 'Jan', margin: 2200, target: 2000 },
  { month: 'Fév', margin: 2500, target: 2000 },
  { month: 'Mar', margin: 2100, target: 2000 },
  { month: 'Avr', margin: 2800, target: 2000 },
  { month: 'Mai', margin: 3100, target: 2000 },
  { month: 'Juin', margin: 3500, target: 2000 },
];

const cashflowData = [
  { month: 'Jan', cash: 4000 },
  { month: 'Fév', cash: 3800 },
  { month: 'Mar', cash: 4200 },
  { month: 'Avr', cash: 4500 },
  { month: 'Mai', cash: 4300 },
  { month: 'Juin', cash: 5000 },
];

export const Dashboard: React.FC = () => {
  return (
    <section id="dashboard" className="section-padding bg-brand-primary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-secondary uppercase tracking-[0.3em] text-sm font-bold mb-4">Expertise Data</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Financial Dashboard Demo</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">Visualisation de la performance financière : pilotage des KPI stratégiques en temps réel.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'EBITDA Margin', value: '24.5%', change: '+2.4%', icon: DollarSign },
            { label: 'Opex Reduction', value: '-12.0%', change: '-1.5%', icon: Activity },
            { label: 'Cash Runway', value: '18 Months', change: '+3 Mo', icon: PieChart },
            { label: 'ROI Portfolio', value: '18.2%', change: '+0.8%', icon: ArrowUpRight },
          ].map((kpi, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-brand-secondary/10 text-brand-secondary">
                  <kpi.icon size={20} />
                </div>
                <span className={`text-xs font-bold ${kpi.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {kpi.change}
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-1">{kpi.label}</p>
              <h4 className="text-2xl font-bold text-white">{kpi.value}</h4>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-card p-6 h-[400px]">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
               <Activity size={18} className="text-brand-secondary" /> Analyse de la Marge vs Objectif
            </h4>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={marginData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                  itemStyle={{ color: '#F8FAFC' }}
                />
                <Bar dataKey="margin" fill="#D4AF37" radius={[4, 4, 0, 0]} />
                <Bar dataKey="target" fill="#1e293b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card p-6 h-[400px]">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
               <DollarSign size={18} className="text-brand-secondary" /> Évolution du Cash Flow Opérationnel
            </h4>
            <ResponsiveContainer width="100%" height="80%">
              <AreaChart data={cashflowData}>
                <defs>
                  <linearGradient id="colorCash" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="cash" stroke="#D4AF37" fillOpacity={1} fill="url(#colorCash)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
