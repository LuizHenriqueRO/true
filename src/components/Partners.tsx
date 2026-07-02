export function Partners() {
  const partners = [
    "BB Consórcios",
    "Itaú Consórcios",
    "Porto Seguro",
    "Ademicon",
    "HS Consórcios",
    "Embracon",
    "CNP Consórcios",
    "Caixa Consórcios"
  ];

  return (
    <section id="parceiros" className="py-20 bg-sky-50 border-t border-b border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm">Alianças Estratégicas</span>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Parceiros de Confiança
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Left and right gradient masks for smooth fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-sky-50 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-sky-50 to-transparent z-10"></div>

        {/* Marquee Content */}
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div 
              key={index} 
              className="mx-8 px-6 py-4 bg-white border border-slate-100 rounded-xl shadow-sm text-slate-500 font-bold text-lg min-w-[200px] text-center"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
      
      {/* Tailwind arbitrary value animation: We'll add this class to our global CSS or define it here */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `
      }} />
    </section>
  );
}
