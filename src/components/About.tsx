import { ShieldCheck, Target } from "lucide-react";

export function About() {
  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image/Visual representation */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 relative shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-50 flex items-center justify-center">
                {/* We use a placeholder since we don't have images. It's clean and geometric */}
                <div className="w-full h-full relative">
                  <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-300/50 rounded-full mix-blend-multiply filter blur-xl"></div>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
            </div>
            
            {/* Overlay card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Grupo True</p>
                  <p className="text-xs text-gray-500">Tradição e Segurança</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div>
            <div className="mb-12">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Quem Somos</span>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Consultoria com visão estratégica e propósito.
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                A Contemplada nasceu da experiência prática e necessidade que tivemos de um atendimento de maior qualidade neste seguimento, com visão estratégica o Grupo True, que conta com empreendimentos diversificados... Nosso objetivo é oferecer consultoria personalizada em consórcios, conectando clientes às melhores oportunidades de crédito e investimento, sempre com transparência, segurança e propósito.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-primary w-6 h-6" />
                <h3 className="text-2xl font-bold text-gray-900">O que fazemos</h3>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 border-l-4 border-l-primary shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  Na Contemplada, acompanhamos todo o processo de consórcio, desde a orientação inicial e educação financeira até a execução e finalização do projeto do cliente. Oferecemos consultoria personalizada, sugerindo as estratégias mais adequadas para cada objetivo.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
