import React from 'react';
import { STORE_INFO, generateGeneralWhatsAppLink } from '../data/storeData';
import caveraLogoImg from '../assets/images/cavera_header_logo.png';
import { MapPin, Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t-2 border-red-600 text-zinc-400 text-xs py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-zinc-900">
          <div className="bg-white p-2 rounded-xl">
            <img src={caveraLogoImg} alt="Cavera Veículos" className="h-9 w-auto object-contain" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-zinc-300">
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Av. Israel Pinheiro, 514, Paracatuzinho, Paracatu - MG</span>
            </a>

            <span className="hidden sm:inline text-zinc-700">|</span>

            <a
              href={`tel:${STORE_INFO.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{STORE_INFO.phone}</span>
            </a>

            <span className="hidden sm:inline text-zinc-700">|</span>

            <a
              href="https://wa.me/5538997328446"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-zinc-300 hover:text-white font-bold transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-600">
          <span>© {new Date().getFullYear()} Cavera Veículos. Paracatu - MG.</span>
          <span>Avenida Israel Pinheiro, 514, Paracatuzinho.</span>
        </div>

      </div>
    </footer>
  );
};
