
import { ArrowRight, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Subtle Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-sky-200/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 animate-fade-in-up">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-slate-700">Planejamento Estratégico</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 animate-fade-in-up animation-delay-100">
            Alavancagem financeira e <span className="text-primary relative inline-block">
              aquisição inteligente
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span> de imóveis e veículos.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Consultoria estratégica e personalizada para viabilizar seus projetos de vida e investimentos com o melhor custo-benefício, sem decisões impulsivas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300">
            <a
              href="#contato"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Simule seu Projeto
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#quem-somos"
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-slate-200 text-base font-bold rounded-lg text-slate-700 bg-white hover:bg-sky-50 hover:border-sky-200 transition-all duration-300 w-full sm:w-auto"
            >
              Conheça a True
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
