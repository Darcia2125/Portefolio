import React from 'react';
import { Link as LinkIcon, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-brand-primary">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-bold text-white mb-2">
              R<span className="text-brand-secondary">F</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
              Portfolio Exécutif | Finance & Performance Stratégique.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-brand-secondary transition-colors">
              <LinkIcon size={20} />
            </a>
            <a href="#contact" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-brand-secondary transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full border border-white/10 text-slate-400 hover:border-brand-secondary hover:text-brand-secondary transition-all group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
          <p>© {new Date().getFullYear()} RANDRIANARIVO FANOMEZANTSOA CIONIE BRICHARD. Tous droits réservés.</p>
          {/*<p className="mt-2">Design & Développement Premium pour Directions Financières.</p> */} 
        </div>
      </div>
    </footer>
  );
};
