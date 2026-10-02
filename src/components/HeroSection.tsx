import React from 'react';
import { STORE_INFO, generateGeneralWhatsAppLink } from '../data/storeData';
import { MapPin, Phone, Search } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
}) => {
  const categories = [
    { id: 'todos', label: 'Todos os Veículos' },
    { id: 'Picape', label: 'Picapes' },
    { id: 'SUV', label: 'SUVs' },
    { id: 'Sedan', label: 'Sedans' },
    { id: 'Hatch', label: 'Hatches' },
  ];

  return (
    <section className="bg-white border-b border-zinc-200 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        
        {/* Top Info Bar: Localização & Telefone Direto */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-zinc-50 border border-zinc-200 p-3 sm:px-4 rounded-xl text-xs">
          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-zinc-900 font-bold hover:text-red-600 transition-colors"
          >
            <MapPin className="w-4 h-4 text-red-600 shrink-0" />
            <span>{STORE_INFO.address}</span>
          </a>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${STORE_INFO.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-1.5 font-bold text-zinc-900 hover:text-red-600 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>{STORE_INFO.phone}</span>
            </a>
            <span className="text-zinc-300">|</span>
            <a
              href="https://wa.me/5538997328446"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-bold text-zinc-900 hover:text-emerald-600 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Busca e Filtros Rápidos */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          
          {/* Campo de Busca Rápida */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar carro por nome ou marca (ex: Hilux, Civic, Compass)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-zinc-500 hover:text-zinc-950 px-1.5 py-0.5 rounded bg-zinc-200 cursor-pointer"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Categorias Rápidas */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-zinc-950 text-white shadow-xs'
                      : 'bg-white text-zinc-700 hover:text-red-600 border border-zinc-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
