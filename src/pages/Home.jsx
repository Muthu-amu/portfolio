import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Visionary from "../components/Visionary";
// import StarfieldBackground from "../components/common/StarfieldBackground";


const Home = () => {
    return (
        <main className="bg-[#0f172a] ">

      {/* <StarfieldBackground count={2000} /> */}

      {/* <div className="relative z-10"> */}
            <Navbar />
            <section id="about"> <About /> </section>
            <section id="skills"><Skills /> </section>
            <section id="visionary"> <Visionary /> </section>
            <section id="projects"> <Projects /> </section>
            <section id="experience"> <Experience /> </section>   
            <section id="contactme"><ContactMe /></section>
            <Footer />
            {/* </div> */}
         </main>
    );
};

export default Home;
