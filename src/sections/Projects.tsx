const projects = [
  { title: "Portfolio Website", description: "A personal portfolio built with React, TypeScript, and Tailwind CSS.", tags: ["React", "TypeScript", "Tailwind"], link: "#" },
  { title: "Task Manager App", description: "A full-featured task management app with drag-and-drop and local storage.", tags: ["React", "Zustand", "Tailwind"], link: "#" },
  { title: "Weather Dashboard", description: "A responsive weather app that fetches live data from an API.", tags: ["React", "API", "CSS"], link: "#" },
  { title: "E-Commerce Store", description: "An online store with product listings, cart functionality, and checkout.", tags: ["Next.js", "Stripe", "Tailwind"], link: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 max-w-6xl mx-auto border-t border-white/5">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Featured <span className="text-blue-500">Projects</span>
      </h2>
      <p className="text-neutral-500 mb-12 max-w-xl">A selection of projects I've built.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a key={project.title} href={project.link} className="group relative bg-neutral-900 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-600 group-hover:text-blue-400 transition-colors">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}