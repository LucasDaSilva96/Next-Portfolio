import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { FaHome, FaLaptopCode } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdConnectWithoutContact } from 'react-icons/md';
const navItems = [
  { name: 'About', link: '#about', icon: <FaHome /> },
  { name: 'Projects', link: '#projects', icon: <FaLaptopCode /> },
  { name: 'Skills', link: '#skills', icon: <GiSkills /> },
  { name: 'Contact', link: '#contact', icon: <MdConnectWithoutContact /> },
];

export default function Home() {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
