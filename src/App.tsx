import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Leadership } from './components/Leadership';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Dashboard } from './components/Dashboard';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-primary text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Leadership />
        <Experience />
        <Education />
        <Skills />
        <Dashboard />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
