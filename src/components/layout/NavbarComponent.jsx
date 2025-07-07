import { Navbar } from 'flowbite-react';

const NavbarComponent = () => {
  return (
    <Navbar fluid rounded className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-600">
          DummyLogo
        </span>
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse className="justify-center">
        <Navbar.Link href="#about">About</Navbar.Link>
        <Navbar.Link href="#skills">Skills</Navbar.Link>
        <Navbar.Link href="#visionary">Visionary</Navbar.Link>
        <Navbar.Link href="#projects">Projects</Navbar.Link>
        <Navbar.Link href="#experience">Experience</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
