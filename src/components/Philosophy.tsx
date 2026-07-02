import { Compass, Flag, Heart } from "lucide-react";

export function Philosophy() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-primary/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">DNA True</span>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl text-white">
            Nossa Filosofia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Visão */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors duration-300">
            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Visão</h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              Sermos uma consultoria e intermediação de consórcios, reconhecida pela confiança, transparência e excelência no atendimento.
            </p>
          </div>

          {/* Missão */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors duration-300">
            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-6">
              <Flag className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Missão</h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              Planejar e executar ações estratégicas... Servir e apoiar clientes... Promover relacionamentos sólidos e transparentes.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors duration-300">
            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Valores</h3>
            <ul className="text-slate-300 leading-relaxed text-sm space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Confiamos em YAHWEH;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Acreditamos nas capacidades do ser humano;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Investimos nosso tempo e trabalho na construção de um mundo melhor;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Temos gratidão pelas pessoas.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

// Quick inline component for Eye icon to avoid another lucide import since we missed it
function Eye({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
