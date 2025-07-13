import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { FaLaptopCode } from 'react-icons/fa6';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', target: 'about' },
    { name: 'Skills', target: 'skills' },
    { name: 'Visionary', target: 'visionary' },
    { name: 'Projects', target: 'projects' },
    { name: 'Experience', target: 'experience' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-[#0f172a]/70 border-b border-white/10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3 text-white">
        <FaLaptopCode className="text-[#60fbc4] text-3xl hover:text-[#7ae3ff] transition-colors" />
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-slate-200 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.target}
                smooth={true}
                offset={-80}
                duration={500}
                spy={true} // enables active tracking
                activeClass="text-[#60fbc4] font-bold" // style for active link
                className="cursor-pointer hover:text-[#60fbc4] transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-4 bg-[#0f172a]/90 text-white border-t border-white/10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.target}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block cursor-pointer hover:text-[#60fbc4]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
