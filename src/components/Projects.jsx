import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'BuildNexus – Construction Solutions Website',
    description:
      'Developed a construction solutions web platform with component-based architecture, API integration, Swiper sliders, and reusable sections. Currently enhancing the design for full responsiveness across devices.',
    techStack: [
      'React', 'Zustand', 'Tailwind CSS', 'DaisyUI', 'SwiperJS', 'TanStack Query',
    ],
    link: 'https://build-nexus-frontend.vercel.app/',
  },
  {
    title: 'Logistics Dashboard – MERN Stack',
    description:
      'A full-stack dashboard for managing logistics data, with role-based access, Excel upload/download, analytics charts, and custom APIs. Built with security and scalability.',
    techStack: [
      'React', 'Node.js', 'MongoDB', 'Ant Design', 'ExcelJS', 'ApexCharts',
    ],
    link: 'https://logistics-dashboard-sand.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section className="w-full text-slate-200 py-6 md:py-8 lg:py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#60fbc4] tracking-wide mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur p-6 rounded-2xl hover:border-[#4CC89D] hover:shadow-[0_0_20px_#4CC89D] transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-[#1e293b] px-3 py-1 rounded-full border border-white/10 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-[#60fbc4] rounded-md hover:bg-[#7ae3ff] transition"
              >
                Live Demo <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
