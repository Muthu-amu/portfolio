import { motion } from 'framer-motion';

const visionaryItems = [
  {
    title: 'Vision as a Developer',
    subtitle: 'What Drives Me',
    description: `I believe that software should be both functional and delightful. I strive to build applications that prioritize performance, scalability, and elegant UI/UX. My goal is to bridge the gap between design and development by delivering pixel-perfect, user-centered solutions.`,
  },
  {
    title: 'Reason to Hire Me',
    subtitle: 'What Sets Me Apart',
    description: `I'm an ambitious frontend developer with a passion for solving real-world problems. I bring energy, ownership, and a hunger to learn. I’m quick to adapt, collaborate, and deliver — backed by a growing portfolio of live projects that reflect my progress.`,
  },
];

const Visionary = () => {
  return (
    <section className="w-full bg-[#0f172a] text-slate-200 py-6 md:py-8 lg:py-16 px-6">
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-[#60fbc4] to-transparent md:left-6" />

        <h2 className="text-4xl font-bold text-center mb-12 text-[#60fbc4] tracking-wide">
          Vision & Values
        </h2>

        <div className="space-y-10 pl-10 md:pl-16">
          {visionaryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative border border-[#4CC89D] bg-white/5 backdrop-blur-md p-6 rounded-xl hover:shadow-[0_0_20px_#4CC89D] transition-all"
            >
              {/* Dot */}
              <div className="absolute -left-6 top-4 w-4 h-4 bg-[#60fbc4] rounded-full border-2 border-white/30" />

              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-[#a0aec0] mb-4">{item.subtitle}</p>
              <p className="text-base text-slate-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Visionary;
