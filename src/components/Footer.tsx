
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border border-slate-700">
                <Image 
                  src="/logo.png" 
                  alt="Logo Contemplada" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Contemplada <span className="text-sky-400">Consórcios</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Consultoria estratégica e personalizada para viabilizar seus projetos de vida e investimentos com o melhor custo-benefício.
            </p>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Links Úteis</h4>
            <ul className="space-y-4">
              <li>
                <a href="#quem-somos" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#parceiros" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Parceiros
                </a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Serviços</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 text-sm">Consórcio de Imóveis</li>
              <li className="text-slate-400 text-sm">Consórcio de Automóveis</li>
              <li className="text-slate-400 text-sm">Consórcio de Veículos Pesados</li>
              <li className="text-slate-400 text-sm">Consórcio Empresarial</li>
              <li className="text-slate-400 text-sm">Consultoria Financeira</li>
            </ul>
          </div>

          {/* Grupo */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">O Grupo</h4>
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <p className="text-slate-300 text-sm mb-2 font-semibold">Uma empresa do Grupo True</p>
              <p className="text-slate-500 text-xs">
                A Contemplada faz parte do Grupo True, que conta com empreendimentos diversificados e tradição em excelência.
              </p>
            </div>
          </div>
          
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Contemplada Consórcios. Todos os direitos reservados.
          </p>
          <div className="text-slate-500 text-sm">
            Desenvolvido com excelência estratégica.
          </div>
        </div>
      </div>
    </footer>
  );
}
