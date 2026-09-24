export default function Hero() {
  return (
    <section className="relative px-6 py-32 max-w-6xl mx-auto min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Animated Glowing Background Blobs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="relative z-10">
        <p className="text-blue-500 font-mono text-sm mb-4 tracking-widest uppercase animate-fade-in-up">
          Hi, my name is
        </p>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
          Juanito Tamboong.
        </h1>
        
        <h2 className="text-4xl md:text-7xl font-bold text-neutral-600 mb-8">
          I build things for the web.
        </h2>
        
        <p className="text-neutral-400 max-w-xl leading-relaxed mb-12 text-lg">
          I'm a frontend developer specializing in building exceptional digital
          experiences. Currently focused on crafting accessible, human-centered
          products using React, TypeScript, and Tailwind CSS.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 hover:border-white/50 hover:bg-white/5 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}