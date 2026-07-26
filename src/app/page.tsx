import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Sobre from '@/components/sections/Sobre';
import Cultos from '@/components/sections/Cultos';
import Galeria from '@/components/sections/Galeria';
import Local from '@/components/sections/Local';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Cultos />
        <Galeria />
        <Local />
      </main>
      <Footer />
    </>
  );
}
