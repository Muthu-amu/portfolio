const Visionary = () => {
  return (
    <section className="w-full bg-[#0f172a] text-slate-200 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-[#60fbc4] tracking-wide">
          My Vision & Philosophy
        </h2>

        <div className="bg-white/5 border border-[#4CC89D] backdrop-blur p-8 rounded-2xl shadow-md hover:shadow-[0_0_20px_#4CC89D] transition-all duration-300">
          <p className="text-lg leading-relaxed text-slate-300">
            I believe in building solutions that not only solve problems but elevate user experience.
            As a developer, I strive for clean, scalable code and intuitive UI/UX that make digital
            experiences smoother and more meaningful.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            My long-term vision is to grow as a full-stack engineer, contribute to impactful projects,
            and continue exploring modern technologies like D3.js, GraphQL, and performance optimization.
            I value collaboration, design-thinking, and lifelong learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Visionary;
