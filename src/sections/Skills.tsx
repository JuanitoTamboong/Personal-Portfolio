const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "HTML & CSS", level: 95 },
  { name: "Git & GitHub", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 max-w-6xl mx-auto border-t border-white/5">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        My <span className="text-blue-500">Skills</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-neutral-500 text-sm">{skill.level}%</span>
            </div>
            <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}