import Hero from './components/Hero';
import Card from './components/Card';
import Projects from './components/Projects';

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <div className="flex justify-center items-center h-screen">
        <Card />
      </div>
      <Projects />
    </main>
  );
}
