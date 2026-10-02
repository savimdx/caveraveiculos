/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Vehicle } from './types/vehicle';
import { INITIAL_VEHICLES } from './data/storeData';
import { Header } from './components/Header';
import { VehicleCatalog } from './components/VehicleCatalog';
import { LocationSection } from './components/LocationSection';
import { VehicleDetailModal } from './components/VehicleDetailModal';
import { AddVehicleModal } from './components/AddVehicleModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const LOCAL_STORAGE_KEY = 'cavera_veiculos_stock_v7';

export default function App() {
  // Carrega o estoque salvo ou padrão
  const [vehicles, setVehicles] = useState<Vehicle[]>(() => {
    try {
      // Limpa dados de versões anteriores
      localStorage.removeItem('cavera_veiculos_stock_v1');
      localStorage.removeItem('cavera_veiculos_stock_v2');
      localStorage.removeItem('cavera_veiculos_stock_v3');
      localStorage.removeItem('cavera_veiculos_stock_v4');
      localStorage.removeItem('cavera_veiculos_stock_v5');
      localStorage.removeItem('cavera_veiculos_stock_v6');

      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed: Vehicle[] = JSON.parse(saved);
        const hasBrokenLinks = parsed.some((v) =>
          v.images.some((img) => typeof img === 'string' && img.includes('ibb.co'))
        );
        if (!hasBrokenLinks && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load vehicles', e);
    }
    return INITIAL_VEHICLES;
  });

  // Modais
  const [selectedVehicleForDetail, setSelectedVehicleForDetail] = useState<Vehicle | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Sincroniza estoque
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(vehicles));
    } catch (e) {
      console.error('Failed to save vehicles', e);
    }
  }, [vehicles]);

  // Ações de estoque
  const handleAddVehicle = (newCar: Vehicle) => {
    setVehicles((prev) => [newCar, ...prev]);
  };

  const handleDeleteVehicle = (id: string) => {
    setVehicles((prev) => prev.filter((v) => v.id !== id));
  };

  const handleToggleStatus = (id: string) => {
    setVehicles((prev) =>
      prev.map((v) =>
        v.id === id ? { ...v, status: v.status === 'sold' ? 'available' : 'sold' } : v
      )
    );
  };

  const handleResetToDefault = () => {
    setVehicles(INITIAL_VEHICLES);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* 1. Header: Logo Cavera Veículos + Endereço + Telefone + Botão Estoque */}
      <Header
        inventoryCount={vehicles.filter((v) => v.status === 'available').length}
        onOpenAddModal={() => setIsAddModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Catálogo de Veículos: Fotos dos Carros, Nome, Preço e Botão WhatsApp Direto */}
        <VehicleCatalog
          vehicles={vehicles}
          onSelectVehicle={(v) => setSelectedVehicleForDetail(v)}
        />

        {/* 3. Localização da Loja: Endereço (Av. Israel Pinheiro, 514) + Telefone + Google Maps e WhatsApp */}
        <LocationSection />
      </main>

      {/* 4. Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />

      {/* 5. Modal de Fotos e Preço ampliado */}
      <VehicleDetailModal
        vehicle={selectedVehicleForDetail}
        onClose={() => setSelectedVehicleForDetail(null)}
      />

      {/* 6. Modal de Gerenciamento do Estoque */}
      <AddVehicleModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        vehicles={vehicles}
        onAddVehicle={handleAddVehicle}
        onDeleteVehicle={handleDeleteVehicle}
        onToggleStatus={handleToggleStatus}
        onResetToDefault={handleResetToDefault}
      />
    </div>
  );
}
