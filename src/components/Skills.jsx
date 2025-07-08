const Skills = () => {
  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Ant Design'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js'],
    },
    {
      title: 'Database',
      skills: ['SQL', 'MongoDB'],
    },
    {
      title: 'Cloud',
      skills: ['AWS (S3, EC2)'],
    },
    {
      title: 'State Management',
      skills: ['Redux', 'Zustand', 'Context API'],
    },
    {
      title: 'Tools & APIs',
      skills: ['Git', 'GitLab', 'RESTful APIs', 'TanStack Query'],
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {skillGroups.map((group) => (
            <div key={group.title} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{group.title}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
