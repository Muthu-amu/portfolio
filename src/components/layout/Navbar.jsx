import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Visionary', href: '#visionary' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 shadow z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-xl font-bold text-blue-600">DummyLogo</div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-blue-600 transition-colors duration-200">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-4 text-gray-700 font-medium bg-white border-t">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block hover:text-blue-600"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
