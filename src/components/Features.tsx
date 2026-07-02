import { Shield, LineChart, Eye } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Confiabilidade",
      description: "Segurança em cada etapa da sua decisão financeira.",
      icon: Shield,
    },
    {
      title: "Estratégia",
      description: "Orientação financeira planejada e análise de custo-benefício.",
      icon: LineChart,
    },
    {
      title: "Transparência",
      description: "Comunicação clara sobre taxas, prazos, custos e benefícios de cada carta.",
      icon: Eye,
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Nossos Diferenciais</span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Por que escolher a Contemplada?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Muito além de uma venda, entregamos uma consultoria dedicada ao seu crescimento patrimonial sustentável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-slate-700 group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
