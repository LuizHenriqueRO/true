
import { ArrowRight, TrendingUp } from "lucide-react";
import { Simulator } from "./Simulator";

export function Hero() {
  return (
    <section className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Subtle Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-sky-200/50 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 animate-fade-in-up animation-delay-100">
              Alavancagem financeira e <span className="text-sky-600 relative inline-block">
                aquisição inteligente
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-sky-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span> de imóveis e veículos.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Consultoria estratégica e personalizada para viabilizar seus projetos de vida e investimentos com o melhor custo-benefício, sem decisões impulsivas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up animation-delay-300">
              <a
                href="#quem-somos"
                className="inline-flex justify-center items-center px-8 py-4 border-2 border-slate-200 text-base font-bold rounded-lg text-slate-700 bg-white hover:bg-sky-50 hover:border-sky-200 transition-all duration-300 w-full sm:w-auto"
              >
                Conheça a True
              </a>
              <a
                href="#contato"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 text-base font-medium text-slate-600 hover:text-sky-600 transition-colors w-full sm:w-auto"
              >
                Falar com consultor
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Simulator */}
          <div className="w-full max-w-md mx-auto lg:max-w-none lg:mr-0 animate-fade-in-up animation-delay-400">
            <Simulator />
          </div>
        </div>
      </div>
    </section>
  );
}
