import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { MdConnectWithoutContact } from 'react-icons/md';
import TechSkills from '@/components/TechSkills';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';
import Footer from '@/components/Footer';
import { TextRevealCardPreview } from '@/components/TextRevealCard';
const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Skills', link: '#skills' },
  {
    name: 'Contact',
    link: '#contact',
    icon: <MdConnectWithoutContact size={32} />,
  },
];

export default function Home() {
  return (
    <main className='relative overflow-clip bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <TechSkills />
        <Experience />
        <Approach />
        <TextRevealCardPreview />
        <Footer />
      </div>
    </main>
  );
}
