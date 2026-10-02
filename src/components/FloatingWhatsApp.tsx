import React from 'react';
import { generateGeneralWhatsAppLink } from '../data/storeData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <a
        href="https://wa.me/5538997328446"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 block rounded-full hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer drop-shadow-xl focus:outline-none"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon className="w-full h-full drop-shadow-md" />
      </a>
    </div>
  );
};
