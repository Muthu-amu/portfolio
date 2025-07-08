const About = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center md:text-left">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          I'm <strong>A. Muthupandi</strong>, a passionate Junior Software Developer with 2.3 years of hands-on experience in crafting responsive, scalable, and user-focused web applications.
          I specialize in modern web technologies including React.js, Node.js, Tailwind CSS, and AWS.
          I’m driven by a strong sense of UI/UX, performance optimization, and collaborative team development.
        </p>

        <p className="text-gray-700 text-base mb-8">
          I've contributed to complex dashboards and interactive apps in the logistics and content management domains, and I'm always eager to learn new technologies and build innovative solutions.
        </p>

        <a
          href="/cv.pdf"
          download
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
