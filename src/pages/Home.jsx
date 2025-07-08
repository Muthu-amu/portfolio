import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Visionary from "../components/Visionary";


const Home = () => {
    return (
        <>
            <Navbar />
            <About />
            <Skills />
            <Visionary />
            <Projects />
            <Experience />
            <ContactMe />
            <Footer />
        </>
    );
};

export default Home;
