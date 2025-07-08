import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
  FaGitAlt,
  FaAws,
} from 'react-icons/fa';
import { SiRedux, SiMongodb, SiNetlify, SiReactquery ,SiExpress } from 'react-icons/si';
import { DiChrome } from 'react-icons/di';
import { BiLogoVisualStudio  } from 'react-icons/bi';
import { GiBearFace } from "react-icons/gi";

const Skills = () => {
  const skillGroups = [
    {
      title: 'Frontend / Backend',
      skills: [
        { name: 'HTML', icon: <FaHtml5 color="#e34c26" /> },
        { name: 'CSS', icon: <FaCss3Alt color="#264de4" /> },
        { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> },
        { name: 'React', icon: <FaReact color="#61DBFB" /> },
        { name: 'Redux', icon: <SiRedux color="#764abc" /> },
        { name: 'Node.js', icon: <FaNode color="#3c873a" /> },
        { name: 'Express.js', icon: <SiExpress color="#ffffff" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" /> },
      ],
    },
    {
      title: 'Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt color="#f1502f" /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Netlify', icon: <SiNetlify color="#38c3c9" /> },
        { name: 'VS Code', icon: <BiLogoVisualStudio color="#007ACC" /> },
        { name: 'Chrome DevTools', icon: <DiChrome color="#fbbc05" /> },
        { name: 'AWS', icon: <FaAws color="#ff9900" /> },
        { name: 'TanStack Query', icon: <SiReactquery color="#FF4154" /> },
        { name: 'Zustand', icon: <GiBearFace color="#7c3aed" /> },
      ],
    },
  ];

  return (
    <section className="w-full bg-[#0f172a] text-slate-200 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#60fbc4] mb-10 tracking-wide">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white/5 border border-white/10 backdrop-blur p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] text-sm rounded-lg border border-white/10 hover:border-[#60fbc4] transition"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-slate-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
