import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AIModalities } from './components/AIModalities';
import { Philosophy } from './components/Philosophy';
import { Capabilities } from './components/Capabilities';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen mesh-gradient relative selection:bg-muted-lavender/30 selection:text-slate-ash">
      <Navbar />
      <Hero />
      <AIModalities />
      <Philosophy />
      <Capabilities />
      <Footer />
    </div>
  );
}

export default App;
