import { Navbar } from 'flowbite-react';
console.log('Navbar from flowbite:', Navbar);
const NavbarComponent = () => {
  return (
    <Navbar fluid rounded className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-600">
          DummyLogo
        </span>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-center">
        <Navbar.Link href="#about" className="text-gray-700 hover:text-blue-600">
          About
        </Navbar.Link>
        <Navbar.Link href="#skills" className="text-gray-700 hover:text-blue-600">
          Skills
        </Navbar.Link>
        <Navbar.Link href="#visionary" className="text-gray-700 hover:text-blue-600">
          Visionary
        </Navbar.Link>
        <Navbar.Link href="#projects" className="text-gray-700 hover:text-blue-600">
          Projects
        </Navbar.Link>
        <Navbar.Link href="#experience" className="text-gray-700 hover:text-blue-600">
          Experience
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
