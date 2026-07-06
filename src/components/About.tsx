import { ShieldCheck, Target } from "lucide-react";

export function About() {
  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image/Visual representation */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-sky-50 relative shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center">
                {/* We use a placeholder since we don't have images. It's clean and geometric */}
                <div className="w-full h-full relative">
                  <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sky-200/50 rounded-full mix-blend-multiply filter blur-xl"></div>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
            </div>
            
            {/* Overlay card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Grupo True</p>
                  <p className="text-xs text-slate-500">Tradição e Segurança</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div>
            <div className="mb-12">
              <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm">Quem Somos</span>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Consultoria com visão estratégica e propósito.
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                A True Contemplada nasceu da experiência prática e necessidade que tivemos de um atendimento de maior qualidade neste seguimento, com visão estratégica o Grupo True, que conta com empreendimentos diversificados... Nosso objetivo é oferecer consultoria personalizada em consórcios, conectando clientes às melhores oportunidades de crédito e investimento, sempre com transparência, segurança e propósito.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-sky-600 w-6 h-6" />
                <h3 className="text-2xl font-bold text-slate-900">O que fazemos</h3>
              </div>
              <div className="p-6 bg-sky-50 rounded-xl border border-sky-100 border-l-4 border-l-sky-500 shadow-sm">
                <p className="text-slate-700 leading-relaxed">
                  Na True Contemplada, acompanhamos todo o processo de consórcio, desde a orientação inicial e educação financeira até a execução e finalização do projeto do cliente. Oferecemos consultoria personalizada, sugerindo as estratégias mais adequadas para cada objetivo.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
