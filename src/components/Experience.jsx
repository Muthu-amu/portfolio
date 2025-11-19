import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Software Developer (Contract)",
    company: "Adeptrite Solution Pvt Ltd",
    period: "Apr 2025 – Present",
    description:
      "Worked as a contract developer on MERN stack projects including a full-fledged Logistics Analytics Dashboard featuring Excel import/export, ApexCharts visualizations, and AWS deployment. Contributed to Hospital CRM core modules (Doctor, Patient, Appointment flows). Developed both frontend (React.js, Zustand, TanStack Query) and backend (Express.js, MongoDB) with reusable architecture and performance optimization.",
  },
  {
    role: "Junior Software Developer",
    company: "Zsoft Consultancy Services",
    period: "Dec 2022 – March 2025",
    description:
      "Developed front-end components focusing on UI/UX enhancement and API integration. Improved API response times through code optimization. Led a team of three developers ensuring code quality and scalable architecture. Actively participated in sprint planning, code reviews, and feature implementation for successful project delivery.",
  },
  // {
  //   role: "Frontend Developer – Construction Solutions Website",
  //   company: "BuildNexus",
  //   period: "2025",
  //   description:
  //     "Developed a responsive construction CMS with dynamic sections (About, Services, Testimonials, Pricing). Built using React, Zustand, Tailwind CSS, DaisyUI, and SwiperJS.",
  // },
];

const Experience = () => {
  return (
    <section className="w-full text-slate-200 py-6 md:py-8 lg:py-16 px-6">
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
