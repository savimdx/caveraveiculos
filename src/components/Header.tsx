import React from 'react';
import caveraLogoImg from '../assets/images/cavera_header_logo.png';

interface HeaderProps {
  onOpenAddModal?: () => void;
  inventoryCount?: number;
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="sticky top-0 z-40 bg-black border-b border-zinc-900 shadow-md">
      <div className="w-full h-20 sm:h-24 md:h-28 flex items-center justify-center px-4">
        {/* Logotipo oficial Cavera Veículos completo, proporcional e sem cortes */}
        <a href="#veiculos" className="h-full flex items-center justify-center focus:outline-none group py-1">
          <img
            src={caveraLogoImg}
            alt="Cavera Veículos"
            className="h-full max-h-20 sm:max-h-24 md:max-h-28 w-auto max-w-full object-contain object-center group-hover:scale-102 transition-transform duration-200"
          />
        </a>
      </div>
    </header>
  );
};
