export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 max-w-3xl mx-auto text-center border-t border-white/5">
      <p className="text-blue-500 font-mono text-sm mb-4">What's Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
      <p className="text-neutral-400 leading-relaxed mb-10">
        I'm currently looking for new opportunities and collaborations. Whether
        you have a question or just want to say hi, my inbox is always open!
      </p>

      <a
        href="mailto:juanito@example.com"
        className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
      >
        Say Hello
      </a>

      <div className="flex justify-center gap-6 mt-12 text-neutral-500">
        <a href="#" className="hover:text-blue-400 transition-colors" aria-label="GitHub">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.58.69.48A10.02 10.02 0 0022 12.26C22 6.58 17.52 2 12 2z" />
          </svg>
        </a>
        <a href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
          </svg>
        </a>
        <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </section>
  );
}