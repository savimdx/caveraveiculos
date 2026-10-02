import React, { useState } from 'react';
import { Vehicle } from '../types/vehicle';
import { formatCurrencyBRL, formatKm, generateWhatsAppCarLink, STORE_INFO } from '../data/storeData';
import { X, ChevronLeft, ChevronRight, Calendar, Gauge, Fuel } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  onClose,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!vehicle) return null;

  const currentImage = vehicle.images[activeImageIndex] || vehicle.images[0];
  const whatsAppUrl = generateWhatsAppCarLink(vehicle, STORE_INFO.whatsapp);

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden z-10 text-zinc-900">
        
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-200 bg-white">
          <div>
            <span className="text-[10px] uppercase font-black text-red-600 tracking-wider">{vehicle.make}</span>
            <h2 className="text-base sm:text-lg font-black text-zinc-950 font-display leading-tight">
              {vehicle.model} <span className="font-semibold text-zinc-600 text-xs sm:text-sm">{vehicle.version}</span>
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-500 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Photo Gallery */}
        <div className="p-4 space-y-4">
          <div className="relative aspect-[16/10] bg-zinc-950 rounded-xl overflow-hidden border border-zinc-200 shadow-inner">
            <img
              src={currentImage}
              alt={`${vehicle.make} ${vehicle.model}`}
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (vehicle.images[1] && target.src !== vehicle.images[1]) {
                  target.src = vehicle.images[1];
                }
              }}
              className="w-full h-full object-cover"
            />

            {vehicle.images.length > 1 && (
              <>
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : vehicle.images.length - 1))}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center cursor-pointer transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev < vehicle.images.length - 1 ? prev + 1 : 0))}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center cursor-pointer transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            <div className="absolute bottom-2.5 right-2.5 bg-black/70 px-2 py-0.5 rounded text-[11px] text-white font-mono font-bold">
              {activeImageIndex + 1} / {vehicle.images.length}
            </div>
          </div>

          {/* Thumbnails if multiple */}
          {vehicle.images.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {vehicle.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx ? 'border-red-600 scale-102' : 'border-zinc-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Miniatura" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Preço e Especificações Diretas */}
          <div className="flex items-center justify-between p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl">
            <div>
              <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block">Preço à vista</span>
              <span className="text-2xl font-black text-zinc-950 font-display">
                {formatCurrencyBRL(vehicle.price)}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-zinc-600 font-semibold">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                <span>{vehicle.year}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Gauge className="w-3.5 h-3.5 text-zinc-400" />
                <span>{formatKm(vehicle.mileage)}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Fuel className="w-3.5 h-3.5 text-zinc-400" />
                <span>{vehicle.fuel}</span>
              </span>
            </div>
          </div>

          {/* Botão de WhatsApp Direto */}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/30 transition-all cursor-pointer"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>Conversar no WhatsApp sobre este Carro</span>
          </a>
        </div>

      </div>
    </div>
  );
};
