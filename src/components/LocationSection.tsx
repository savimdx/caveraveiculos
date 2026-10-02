import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { MapPin, Phone, ExternalLink, Clock } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-10 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco selecionado com texto formatado e estruturado */}
        <div className="bg-zinc-950 text-white rounded-2xl p-6 sm:p-8 border-2 border-red-600 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Informações Formatadas e Estruturadas */}
            <div className="lg:col-span-8 space-y-6">
              <div className="text-center flex flex-col items-center">
                <span className="text-[11px] font-black uppercase tracking-widest text-red-500">
                  Venha nos Visitar
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-white mt-0.5">
                  Cavera Veículos
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
                  Atendimento personalizado, procedência garantida e as melhores condições de Paracatu e região.
                </p>
              </div>

              {/* Grid de Informações Formatadas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                
                {/* 1. Endereço */}
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-red-500">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Endereço</span>
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm font-bold text-white block leading-snug">
                      Av. Israel Pinheiro, 514
                    </strong>
                    <span className="text-[11px] text-zinc-400 block mt-0.5">
                      Bairro Paracatuzinho<br />Paracatu - MG
                    </span>
                  </div>
                </div>

                {/* 2. Telefone */}
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-red-500">
                    <Phone className="w-4 h-4 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Telefone</span>
                  </div>
                  <div>
                    <a
                      href={`tel:${STORE_INFO.phone.replace(/\D/g, '')}`}
                      className="text-xs sm:text-sm font-bold text-white hover:text-red-400 transition-colors block leading-snug"
                    >
                      {STORE_INFO.phone}
                    </a>
                    <span className="text-[11px] text-zinc-400 block mt-0.5">
                      Ligação direta e atendimento da loja
                    </span>
                  </div>
                </div>

                {/* 3. Horário */}
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-red-500">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Funcionamento</span>
                  </div>
                  <div className="text-[11px] text-zinc-300 space-y-0.5">
                    <div>
                      <span className="text-zinc-400">Seg a Sex:</span>{' '}
                      <strong className="text-white font-semibold">{STORE_INFO.openingHoursWeekdays}</strong>
                    </div>
                    <div>
                      <span className="text-zinc-400">Sábado:</span>{' '}
                      <strong className="text-white font-semibold">{STORE_INFO.openingHoursSaturday}</strong>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Ação: Botão Google Maps */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto lg:w-full py-4 px-6 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 shadow-xl hover:scale-102 active:scale-98 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              </a>
              <span className="text-xs sm:text-sm font-medium text-zinc-300 text-center mt-2">
                Trace sua rota com facilidade até nossa loja
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
