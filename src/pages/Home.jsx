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
            <section id="about"> <About /> </section>
            <section id="skills"><Skills /> </section>
            <section id="visionary"> <Visionary /> </section>
            <section id="projects"> <Projects /> </section>
            <section id="experience"> <Experience /> </section>
            <section id="contactme"><ContactMe /></section>
            <Footer />
        </>
    );
};

export default Home;
