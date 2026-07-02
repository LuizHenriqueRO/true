import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-white tracking-tight">
                Contemplada <span className="text-primary">Consórcios</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Consultoria estratégica e personalizada para viabilizar seus projetos de vida e investimentos com o melhor custo-benefício.
            </p>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Links Úteis</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#quem-somos" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="#diferenciais" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Diferenciais
                </Link>
              </li>
              <li>
                <Link href="#produtos" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="#parceiros" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Parceiros
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Serviços</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">Consórcio de Imóveis</li>
              <li className="text-gray-400 text-sm">Consórcio de Automóveis</li>
              <li className="text-gray-400 text-sm">Consórcio de Veículos Pesados</li>
              <li className="text-gray-400 text-sm">Consórcio Empresarial</li>
              <li className="text-gray-400 text-sm">Consultoria Financeira</li>
            </ul>
          </div>

          {/* Grupo */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">O Grupo</h4>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <p className="text-gray-300 text-sm mb-2 font-semibold">Uma empresa do Grupo True</p>
              <p className="text-gray-500 text-xs">
                A Contemplada faz parte do Grupo True, que conta com empreendimentos diversificados e tradição em excelência.
              </p>
            </div>
          </div>
          
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Contemplada Consórcios. Todos os direitos reservados.
          </p>
          <div className="text-gray-500 text-sm">
            Desenvolvido com excelência estratégica.
          </div>
        </div>
      </div>
    </footer>
  );
}
