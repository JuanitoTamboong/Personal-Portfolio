const experiences = [
  { role: "Frontend Developer", company: "Freelance", period: "2023 — Present", description: "Building responsive web applications for clients using React, TypeScript, and Tailwind CSS." },
  { role: "Junior Web Developer", company: "Tech Company", period: "2022 — 2023", description: "Collaborated with senior developers to build and maintain web applications." },
  { role: "Self-Taught Developer", company: "Personal Projects", period: "2021 — 2022", description: "Learned the fundamentals of web development through online courses and hands-on projects." },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 max-w-6xl mx-auto border-t border-white/5">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        My <span className="text-blue-500">Experience</span>
      </h2>
      <div className="relative border-l border-white/10 pl-8 space-y-12">
        {experiences.map((exp) => (
          <div key={exp.role} className="relative">
            <span className="absolute -left-[41px] top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-[#050505]" />
            <p className="text-sm font-mono text-blue-400 mb-1">{exp.period}</p>
            <h3 className="text-xl font-bold">{exp.role} <span className="text-neutral-500">· {exp.company}</span></h3>
            <p className="text-neutral-400 text-sm mt-3 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}