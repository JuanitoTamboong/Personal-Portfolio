export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#050505]/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-bold text-lg">Juanito<span className="text-blue-500">.</span></a>
        <ul className="hidden md:flex gap-8 text-sm text-neutral-400">
          <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
          <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}