import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { FaHome, FaLaptopCode } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdConnectWithoutContact } from 'react-icons/md';
import TechSkills from '@/components/TechSkills';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';
import Footer from '@/components/Footer';
const navItems = [
  { name: 'About', link: '#about', icon: <FaHome size={32} /> },
  { name: 'Projects', link: '#projects', icon: <FaLaptopCode size={32} /> },
  { name: 'Skills', link: '#skills', icon: <GiSkills size={32} /> },
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
        <Footer />
      </div>
    </main>
  );
}
