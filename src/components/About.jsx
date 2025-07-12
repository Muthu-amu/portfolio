const About = () => {
  return (
    <section className="w-full flex items-center justify-center  text-slate-200 pt-16 pb-10 md:pt-16 md:pb-10 lg:pt-22 lg:pb-14 px-4">
      <div className="max-w-4xl mx-auto text-center md:text-left space-y-6">
        <h2 className="text-4xl font-bold tracking-wide text-[#60fbc4]">About Me</h2>

        <p className="text-lg leading-relaxed">
          I'm <strong>A. Muthupandi</strong>, a passionate Junior Software Developer with 2.3 years of hands-on
          experience, especially in React.js. I specialize in modern web technologies including React.js, Node.js, Tailwind CSS, and AWS.
        </p>

        <p className="text-base">
          I’ve contributed to dashboards and web apps focused on performance, design, and scale. I enjoy building
          clean and interactive user experiences and solving real-world problems through code.
        </p>

        <a
          href="/cv.pdf"
          download
          className="inline-block bg-[#60fbc4] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#7ae3ff] transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
