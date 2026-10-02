import React, { useState, useEffect } from 'react';
import { Vehicle } from '../types/vehicle';
import { formatCurrencyBRL, STORE_INFO } from '../data/storeData';
import { Calculator, Info } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FinancingSimulatorProps {
  vehicles: Vehicle[];
  selectedVehicle?: Vehicle | null;
}

export const FinancingSimulator: React.FC<FinancingSimulatorProps> = ({
  vehicles,
  selectedVehicle,
}) => {
  const [selectedCarId, setSelectedCarId] = useState<string>(
    selectedVehicle?.id || (vehicles[0]?.id ?? '')
  );
  const [customPrice, setCustomPrice] = useState<number>(
    selectedVehicle?.price || vehicles[0]?.price || 120000
  );
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30);
  const [customDownPayment, setCustomDownPayment] = useState<number>(
    Math.round(((selectedVehicle?.price || vehicles[0]?.price || 120000) * 30) / 100)
  );
  const [installments, setInstallments] = useState<number>(48);
  const [clientName, setClientName] = useState<string>('');
  const [clientCpfOrCity, setClientCpfOrCity] = useState<string>('Paracatu - MG');

  // Update when external selectedVehicle changes
  useEffect(() => {
    if (selectedVehicle) {
      setSelectedCarId(selectedVehicle.id);
      setCustomPrice(selectedVehicle.price);
      setCustomDownPayment(Math.round((selectedVehicle.price * downPaymentPercent) / 100));
    }
  }, [selectedVehicle]);

  // Handle vehicle select change
  const handleCarChange = (carId: string) => {
    setSelectedCarId(carId);
    const car = vehicles.find((v) => v.id === carId);
    if (car) {
      setCustomPrice(car.price);
      setCustomDownPayment(Math.round((car.price * downPaymentPercent) / 100));
    }
  };

  // Handle down payment percent quick click
  const handlePercentClick = (pct: number) => {
    setDownPaymentPercent(pct);
    setCustomDownPayment(Math.round((customPrice * pct) / 100));
  };

  // Financing calculation
  const financedAmount = Math.max(0, customPrice - customDownPayment);
  const monthlyRate = 0.0139; // ~1.39% a.m. average
  const factor = (monthlyRate * Math.pow(1 + monthlyRate, installments)) / (Math.pow(1 + monthlyRate, installments) - 1);
  const estimatedMonthlyInstallment = financedAmount > 0 ? financedAmount * factor : 0;

  const currentCar = vehicles.find((v) => v.id === selectedCarId);
  const carTitle = currentCar ? `${currentCar.make} ${currentCar.model} ${currentCar.version}` : 'Veículo Selecionado';

  // Construct WhatsApp proposal message
  const generateProposalUrl = () => {
    const message = `Olá! Fiz uma simulação de financiamento no site da Cavera Veículos:
Carro: ${carTitle}
Valor do Veículo: ${formatCurrencyBRL(customPrice)}
Entrada: ${formatCurrencyBRL(customDownPayment)} (${Math.round((customDownPayment / customPrice) * 100)}%)
Parcelas: ${installments}x de aprox. ${formatCurrencyBRL(estimatedMonthlyInstallment)}
Nome: ${clientName || 'Cliente'}
Local: ${clientCpfOrCity || 'Paracatu - MG'}

Gostaria de saber quais bancos aprovam minha ficha e se podemos fechar negócio na loja da Av. Israel Pinheiro, 514!`;

    return `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="simulador" className="py-14 bg-slate-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 rounded-full px-3 py-1 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Crédito Automotivo</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 font-display tracking-tight uppercase">
            Simulador de Financiamento
          </h2>
          <p className="text-zinc-600 text-sm mt-1">
            Simule a entrada e as parcelas ideais para você. Trabalhamos com os melhores bancos de Paracatu: Santander, BV, Itaú, Bradesco e Safra.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto bg-white border border-zinc-200 rounded-2xl shadow-xl p-6 sm:p-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Controls */}
            <div className="space-y-5">
              
              {/* Select Car from Stock */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-2">
                  Escolha o Carro do Estoque
                </label>
                <select
                  value={selectedCarId}
                  onChange={(e) => handleCarChange(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3.5 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {vehicles.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.make} {v.model} ({v.year}) - {formatCurrencyBRL(v.price)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Display */}
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-600 mb-1.5">
                  <span className="font-bold uppercase tracking-wider text-zinc-800">Valor do Carro</span>
                  <span className="font-mono text-zinc-950 font-black text-sm">
                    {formatCurrencyBRL(customPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="400000"
                  step="5000"
                  value={customPrice}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setCustomPrice(val);
                    setCustomDownPayment(Math.round((val * downPaymentPercent) / 100));
                  }}
                  className="w-full accent-red-600 cursor-pointer"
                />
              </div>

              {/* Down Payment (Entrada) */}
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-600 mb-2">
                  <span className="font-bold uppercase tracking-wider text-zinc-800">Valor da Entrada</span>
                  <span className="font-mono text-red-600 font-black text-sm">
                    {formatCurrencyBRL(customDownPayment)}
                  </span>
                </div>

                {/* Quick percent buttons */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {[20, 30, 40, 50].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => handlePercentClick(pct)}
                      className={`py-1.5 text-xs font-black rounded-lg transition-colors cursor-pointer ${
                        downPaymentPercent === pct
                          ? 'bg-red-600 text-white shadow-xs'
                          : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>

                <input
                  type="range"
                  min={Math.round(customPrice * 0.1)}
                  max={Math.round(customPrice * 0.8)}
                  step="2000"
                  value={customDownPayment}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setCustomDownPayment(val);
                    setDownPaymentPercent(Math.round((val / customPrice) * 100));
                  }}
                  className="w-full accent-red-600 cursor-pointer"
                />
                <span className="text-[11px] text-zinc-500 mt-1 block">
                  Você também pode dar seu veículo usado como entrada!
                </span>
              </div>

              {/* Installments Term */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-2">
                  Número de Parcelas
                </label>
                <div className="grid grid-cols-5 gap-1.5">
                  {[12, 24, 36, 48, 60].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setInstallments(n)}
                      className={`py-2 text-xs font-black rounded-lg transition-colors cursor-pointer ${
                        installments === n
                          ? 'bg-zinc-950 text-white shadow-xs'
                          : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                      }`}
                    >
                      {n}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Contact Inputs for WhatsApp prefill */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-semibold text-zinc-700 mb-1">Seu Nome (opcional)</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ex: Carlos Oliveira"
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-zinc-700 mb-1">Cidade / Região</label>
                  <input
                    type="text"
                    value={clientCpfOrCity}
                    onChange={(e) => setClientCpfOrCity(e.target.value)}
                    placeholder="Paracatu - MG"
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium"
                  />
                </div>
              </div>

            </div>

            {/* Right Summary Box (High-Contrast Carbon with Red highlights) */}
            <div className="flex flex-col justify-between bg-zinc-950 p-6 rounded-2xl text-white shadow-lg border border-zinc-800">
              <div>
                <span className="text-xs uppercase font-black text-red-500 tracking-wider block mb-1">
                  Resumo da Simulação
                </span>
                <h3 className="text-lg font-black text-white leading-snug font-display">
                  {carTitle}
                </h3>

                <div className="my-6 space-y-3 pb-6 border-b border-zinc-800 text-xs text-zinc-300">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Valor Total do Carro:</span>
                    <span className="font-mono text-white font-bold">{formatCurrencyBRL(customPrice)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Entrada sugerida ({Math.round((customDownPayment / customPrice) * 100)}%):</span>
                    <span className="font-mono text-red-400 font-bold">{formatCurrencyBRL(customDownPayment)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Saldo a Financiar:</span>
                    <span className="font-mono text-white font-bold">{formatCurrencyBRL(financedAmount)}</span>
                  </div>
                </div>

                {/* Big Installment Highlight */}
                <div className="text-center py-4 bg-zinc-900 rounded-xl border border-zinc-800 mb-6">
                  <span className="text-xs uppercase font-bold text-zinc-400 block tracking-wider">
                    Plano de Pagamento Estimado
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-red-500 font-display tabular-nums my-1">
                    {installments}x de {formatCurrencyBRL(estimatedMonthlyInstallment)}
                  </div>
                  <span className="text-[11px] text-zinc-400 block font-medium">
                    Taxas a partir de 1,39% a.m. com bancos parceiros
                  </span>
                </div>

                {/* Transparency note */}
                <div className="flex items-start gap-2 text-[11px] text-zinc-400 leading-normal mb-6">
                  <Info className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                  <span>
                    Simulação meramente informativa. Sujeita à aprovação cadastral junto às financeiras em Paracatu - MG.
                  </span>
                </div>
              </div>

              {/* Primary Action Button to Send via WhatsApp */}
              <a
                href={generateProposalUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm shadow-xl shadow-[#25D366]/30 flex items-center justify-center gap-2.5 transition-all active:scale-98 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Enviar Simulação no WhatsApp</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
