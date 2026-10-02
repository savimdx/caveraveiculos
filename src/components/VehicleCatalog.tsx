import React, { useMemo } from 'react';
import { Vehicle } from '../types/vehicle';
import { formatCurrencyBRL, STORE_INFO } from '../data/storeData';
import { Calendar, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface VehicleCatalogProps {
  vehicles: Vehicle[];
  searchQuery?: string;
  selectedCategory?: string;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const VehicleCatalog: React.FC<VehicleCatalogProps> = ({
  vehicles,
  searchQuery = '',
  selectedCategory = 'todos',
  onSelectVehicle,
}) => {
  // Filter vehicles by search and category
  const filteredVehicles = useMemo(() => {
    return vehicles.filter((car) => {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const match =
          car.make.toLowerCase().includes(query) ||
          car.model.toLowerCase().includes(query) ||
          car.version.toLowerCase().includes(query) ||
          car.bodyType.toLowerCase().includes(query);
        if (!match) return false;
      }

      if (selectedCategory !== 'todos' && car.bodyType !== selectedCategory) {
        return false;
      }

      return true;
    });
  }, [vehicles, searchQuery, selectedCategory]);

  return (
    <section id="veiculos" className="py-8 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CARROS E MOTOS DISPONÍVEIS CENTRALIZADO, EM DESTAQUE E COM ANIMAÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center my-6 text-center select-none"
        >
          <div className="relative inline-flex items-center gap-3 sm:gap-5">
            {/* Linha de velocidade esportiva esquerda */}
            <span className="hidden sm:block h-[3px] w-14 sm:w-24 bg-gradient-to-r from-transparent via-red-500 to-red-600 rounded-full animate-pulse" />
            
            <div className="relative">
              <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 font-display uppercase tracking-widest drop-shadow-sm">
                CARROS E MOTOS <span className="text-red-600">DISPONÍVEIS</span>
              </h2>
              {/* Barra animada de destaque */}
              <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-zinc-950 to-red-600 rounded-full mt-2 animate-pulse shadow-[0_0_14px_rgba(220,38,38,0.5)]" />
            </div>

            {/* Linha de velocidade esportiva direita */}
            <span className="hidden sm:block h-[3px] w-14 sm:w-24 bg-gradient-to-l from-transparent via-red-500 to-red-600 rounded-full animate-pulse" />
          </div>
        </motion.div>
        {/* Empty State */}
        {filteredVehicles.length === 0 && (
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-zinc-200">
            <AlertCircle className="w-10 h-10 text-zinc-400 mx-auto mb-2" />
            <h3 className="text-base font-bold text-zinc-900 mb-1">Nenhum veículo encontrado</h3>
            <p className="text-xs text-zinc-500 max-w-sm mx-auto">
              Não encontramos veículos com o termo digitado. Tente buscar por Hilux, Compass, Civic ou limpe a busca.
            </p>
          </div>
        )}

        {/* Grid de Veículos - Direto ao Ponto: Fotos, Nome, Preço e Botão WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((car) => {
            const mainPhoto = car.images[0] || 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80';

            return (
              <article
                key={car.id}
                className="group bg-white rounded-2xl border border-zinc-200 hover:border-red-600/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                {/* 1. Foto do Carro */}
                <div>
                  <div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden">
                    <img
                      src={mainPhoto}
                      alt={`${car.make} ${car.model}`}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (car.images[1] && target.src !== car.images[1]) {
                          target.src = car.images[1];
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                    />
                  </div>

                  {/* 2. Nome do Carro, Preço e Informações Essenciais */}
                  <div className="p-4">
                    <span className="text-[10px] uppercase font-black text-red-600 tracking-wider block mb-0.5">
                      {car.make}
                    </span>
                    <h3 className="text-base font-black text-zinc-950 leading-snug line-clamp-1 font-display">
                      {car.model} <span className="font-semibold text-zinc-600 text-xs">{car.version}</span>
                    </h3>

                    {/* Preço em Destaque */}
                    <div className="mt-2 flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block">
                          Preço à vista
                        </span>
                        <div className="text-2xl font-black text-zinc-950 font-display tracking-tight">
                          {formatCurrencyBRL(car.price)}
                        </div>
                      </div>
                    </div>

                    {/* Ano do Veículo em Destaque Centralizado */}
                    <div className="mt-3 pt-2.5 border-t border-zinc-100 flex items-center justify-center">
                      <div className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-zinc-100/80 border border-zinc-200">
                        <Calendar className="w-4 h-4 text-red-600 shrink-0" />
                        <span className="text-[11px] font-extrabold text-zinc-500 uppercase tracking-wider">Ano:</span>
                        <span className="text-lg font-black text-zinc-950 font-display tracking-wide">{car.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Botão WhatsApp Redirecionamento Direto em Verde com o Símbolo */}
                <div className="p-4 pt-0 grid grid-cols-1 gap-2">
                  <a
                    href="https://wa.me/5538997328446"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-98 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md shadow-[#25D366]/30 transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 shrink-0" />
                    <span>Negociar no WhatsApp</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
