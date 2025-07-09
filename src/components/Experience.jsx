import { motion } from 'framer-motion';

const experienceData = [
  {
    role: 'Junior Software Developer',
    company: 'Zsoft Consultancy Services',
    period: '2022 – 2025',
    description:
      'Built scalable dashboards (CMS, Logistics) with role-based auth, Excel import/export, and analytics using React, Zustand, TanStack Query, MongoDB, and AWS.',
  },
  {
    role: 'AR&D Executive',
    company: 'CAPLIN STERILES LIMITED',
    period: '2021 – 2022',
    description:
      'Prepared technical reports and supported research documentation using IT tools and data visualization for pharmaceutical analytics.',
  },
  {
    role: 'Chemist',
    company: 'SGS India Pvt Ltd',
    period: '2019 – 2021',
    description:
      'Performed chemical testing, ensured lab compliance, and reported findings for pharmaceutical product analysis.',
  },
];

const Experience = () => {
  return (
    <section className="w-full bg-[#0f172a] text-slate-200 py-6 md:py-8 lg:py-16 px-6">
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline vertical line */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-[#60fbc4] to-transparent md:left-6" />

        <h2 className="text-4xl font-bold text-center mb-12 text-[#60fbc4] tracking-wide">
          Experience
        </h2>

        <div className="space-y-10 pl-10 md:pl-16">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative border border-[#4CC89D] bg-white/5 backdrop-blur-md p-6 rounded-xl hover:shadow-[0_0_20px_#4CC89D] transition-all"
            >
              {/* Dot on the timeline */}
              <div className="absolute -left-6 top-4 w-4 h-4 bg-[#60fbc4] rounded-full border-2 border-white/30" />

              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-sm text-[#a0aec0] mb-2">
                {exp.company} • {exp.period}
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
