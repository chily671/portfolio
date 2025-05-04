import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}
