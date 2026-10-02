import React, { useState } from 'react';
import { STORE_INFO, generateTradeInWhatsAppLink } from '../data/storeData';
import { X, ArrowLeftRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface TradeInModalProps {
  isOpen: boolean;
  onClose: () => void;
  interestVehicle?: string;
}

export const TradeInModal: React.FC<TradeInModalProps> = ({
  isOpen,
  onClose,
  interestVehicle,
}) => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [tradeModel, setTradeModel] = useState('');
  const [tradeYear, setTradeYear] = useState('');
  const [tradeKm, setTradeKm] = useState('');
  const [transmission, setTransmission] = useState('Automático');
  const [details, setDetails] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tradeModel.trim()) return;

    const link = generateTradeInWhatsAppLink(
      {
        clientName,
        clientPhone,
        tradeModel: `${tradeModel} (${transmission}${details ? ` - ${details}` : ''})`,
        tradeYear: tradeYear || 'Não informado',
        tradeKm: tradeKm || 'Não informado',
        interestVehicle,
      },
      STORE_INFO.whatsapp
    );

    window.open(link, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden z-10 text-zinc-900">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-red-100 text-red-600">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-zinc-950 font-display">
                Avaliação de Veículo na Troca
              </h3>
              <p className="text-xs text-zinc-500 font-medium">
                Cavera Veículos · Paracatu - MG
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-500 hover:text-zinc-950 rounded-lg bg-white border border-zinc-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {interestVehicle && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-zinc-800 font-medium">
              <span>Interesse no carro do estoque: </span>
              <strong className="text-red-700 font-bold">{interestVehicle}</strong>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1.5">
              Seu Veículo Atual (Marca e Modelo) *
            </label>
            <input
              type="text"
              required
              value={tradeModel}
              onChange={(e) => setTradeModel(e.target.value)}
              placeholder="Ex: Corolla XEi 2.0, Gol 1.6, Onix Plus..."
              className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1.5">
                Ano / Modelo
              </label>
              <input
                type="text"
                value={tradeYear}
                onChange={(e) => setTradeYear(e.target.value)}
                placeholder="Ex: 2020/2021"
                className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 font-medium"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1.5">
                Quilometragem (KM)
              </label>
              <input
                type="text"
                value={tradeKm}
                onChange={(e) => setTradeKm(e.target.value)}
                placeholder="Ex: 58.000 km"
                className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1.5">
              Tipo de Câmbio
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Automático', 'Manual'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setTransmission(type)}
                  className={`py-2 text-xs font-black rounded-lg transition-colors cursor-pointer ${
                    transmission === type
                      ? 'bg-zinc-950 text-white shadow-xs'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1.5">
                Seu Nome
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Seu nome completo"
                className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 font-medium"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1.5">
                Seu WhatsApp
              </label>
              <input
                type="text"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="(38) 9____-____"
                className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1.5">
              Observações (opcional)
            </label>
            <input
              type="text"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Ex: Único dono, pneus novos, teto solar..."
              className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 font-medium"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm shadow-lg shadow-[#25D366]/30 flex items-center justify-center gap-2.5 transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>Enviar Dados para Avaliação no WhatsApp</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
