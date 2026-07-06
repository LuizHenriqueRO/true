"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

export function Simulator() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSimulating(true);

    // Mock API call / calculation delay
    setTimeout(() => {
      setIsSimulating(false);
      setIsSuccess(true);
      
      // Reset after 3 seconds for prototype purposes
      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    }, 1000);
  };

  return (
    <div className="bg-sky-50 p-8 rounded-2xl shadow-sm border border-sky-100 relative overflow-hidden animate-fade-in-up animation-delay-300">

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-900">Simule seu Consórcio</h3>
        <p className="text-slate-500 text-sm mt-2">
          Descubra o plano ideal para o seu objetivo
        </p>
      </div>

      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-8 space-y-4 text-center animate-fade-in">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-2">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h4 className="text-xl font-bold text-slate-900">Simulação Pré-Aprovada!</h4>
          <p className="text-slate-600 text-sm">
            Redirecionando para um consultor especialista no WhatsApp...
          </p>
        </div>
      ) : (
        <form onSubmit={handleSimulate} className="space-y-5">
          <div>
            <label htmlFor="objective" className="block text-sm font-semibold text-slate-700 mb-1.5">
              O que você deseja comprar?
            </label>
            <select
              id="objective"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white text-slate-700 shadow-sm"
              defaultValue=""
            >
              <option value="" disabled>Selecione seu objetivo</option>
              <option value="imovel">Imóvel</option>
              <option value="veiculo">Veículo</option>
              <option value="maquinario">Maquinário / Agro</option>
              <option value="capital">Capital de Giro</option>
            </select>
          </div>

          <div>
            <label htmlFor="value" className="block text-sm font-semibold text-slate-700 mb-1.5">
              Valor do crédito (R$)
            </label>
            <input
              type="text"
              id="value"
              required
              placeholder="Ex: R$ 200.000,00"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white text-slate-900 shadow-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isSimulating}
            className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-lg shadow-md text-base font-bold text-white bg-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {isSimulating ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Processando...
              </>
            ) : (
              "Simular Agora"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
