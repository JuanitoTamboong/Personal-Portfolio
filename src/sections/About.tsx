export default function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-6xl mx-auto border-t border-white/5">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        About <span className="text-blue-500">Me</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4 text-neutral-400 leading-relaxed">
          <p>
            Hello! I'm Juanito, a passionate frontend developer based in the
            Philippines. My journey into web development started with a
            curiosity about how websites work — and it quickly turned into a
            full-blown passion.
          </p>
          <p>
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to
            always build products that provide pixel-perfect, performant
            experiences.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-neutral-300 pt-2">
            <li>▹ TypeScript</li>
            <li>▹ React</li>
            <li>▹ Tailwind CSS</li>
            <li>▹ Node.js</li>
            <li>▹ Vite</li>
            <li>▹ Git & GitHub</li>
          </ul>
        </div>
       <div className="relative group">
  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500" />
  <div className="relative bg-neutral-900 border border-white/10 rounded-lg p-6">
    <div className="aspect-square bg-neutral-800 rounded-md overflow-hidden">
      <img
        src="./public/images/pexil-me.jfif"
        alt="Your Photo"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
      </div>
    </section>
  );
}