import About from "../components/About";
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
        </>
    );
};

export default Home;
