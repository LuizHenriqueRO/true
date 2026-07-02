import { Home, Car, Building2 } from "lucide-react";

export function Products() {
  const products = [
    {
      title: "Consórcio de Imóveis",
      description: "Imóvel, terreno, construção e reforma.",
      icon: Home,
    },
    {
      title: "Consórcio de Automóveis",
      description: "Automóveis e veículos pesados.",
      icon: Car,
    },
    {
      title: "Outros Consórcios",
      description: "Empresarial, investimentos, agro, implementos, serviços.",
      icon: Building2,
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Soluções</span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos Produtos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Crédito inteligente para cada etapa da sua vida e do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                <product.icon className="w-10 h-10 text-gray-900 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
              <p className="text-gray-600">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
