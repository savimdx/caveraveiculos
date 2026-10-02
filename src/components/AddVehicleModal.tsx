import React, { useState } from 'react';
import { Vehicle, BodyType, FuelType, TransmissionType } from '../types/vehicle';
import { formatCurrencyBRL } from '../data/storeData';
import { X, Plus, Trash2, Car } from 'lucide-react';

interface AddVehicleModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicles: Vehicle[];
  onAddVehicle: (newVehicle: Vehicle) => void;
  onDeleteVehicle: (id: string) => void;
  onToggleStatus: (id: string) => void;
  onResetToDefault: () => void;
}

export const AddVehicleModal: React.FC<AddVehicleModalProps> = ({
  isOpen,
  onClose,
  vehicles,
  onAddVehicle,
  onDeleteVehicle,
  onToggleStatus,
  onResetToDefault,
}) => {
  const [activeTab, setActiveTab] = useState<'add' | 'list'>('add');

  // Form states
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [version, setVersion] = useState('');
  const [year, setYear] = useState('2023/2023');
  const [price, setPrice] = useState('');
  const [mileage, setMileage] = useState('');
  const [fuel, setFuel] = useState<FuelType>('Flex');
  const [transmission, setTransmission] = useState<TransmissionType>('Automático');
  const [bodyType, setBodyType] = useState<BodyType>('SUV');
  const [color, setColor] = useState('Branco');
  const [plateEnd, setPlateEnd] = useState('8');
  const [imageUrl, setImageUrl] = useState('');
  const [highlights, setHighlights] = useState('Único Dono, Laudo Cautelar Aprovado');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleCreateCar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!make.trim() || !model.trim() || !price) return;

    const newCar: Vehicle = {
      id: `custom-${Date.now()}`,
      make: make.trim(),
      model: model.trim(),
      version: version.trim() || 'Completo',
      year: year.trim() || '2023/2024',
      price: Number(price),
      mileage: Number(mileage) || 30000,
      fuel,
      transmission,
      bodyType,
      color: color.trim() || 'Prata',
      plateEnd: plateEnd.trim() || '5',
      images: [
        imageUrl.trim() ||
          'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80',
      ],
      highlights: highlights
        .split(',')
        .map((h) => h.trim())
        .filter(Boolean),
      features: [
        'Ar-condicionado Digital',
        'Direção Elétrica Assistida',
        'Central Multimídia Touchscreen',
        'Bancos com Acabamento Premium',
        'Câmera de Ré e Sensores de Estacionamento',
        'Freios ABS com EBD e Airbags',
      ],
      description:
        description.trim() ||
        `Veículo seminovo em excelente estado de conservação. Revisões em dia, documentação pronta para transferência na Cavera Veículos em Paracatu - MG.`,
      status: 'available',
      isFeatured: false,
    };

    onAddVehicle(newCar);
    setActiveTab('list');

    // Reset form fields
    setMake('');
    setModel('');
    setVersion('');
    setPrice('');
    setMileage('');
    setImageUrl('');
    setDescription('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] text-zinc-900">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50">
          <div className="flex items-center gap-2">
            <Car className="w-5 h-5 text-red-600" />
            <div>
              <h3 className="text-base font-black text-zinc-950 font-display">
                Painel do Estoque da Loja
              </h3>
              <p className="text-xs text-zinc-500 font-medium">
                Cavera Veículos · Adicione novas fotos e atualize preços
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

        {/* Tabs Bar */}
        <div className="flex border-b border-zinc-200 bg-zinc-100 px-6 pt-2">
          <button
            onClick={() => setActiveTab('add')}
            className={`py-2.5 px-4 text-xs font-black border-b-2 transition-colors cursor-pointer ${
              activeTab === 'add'
                ? 'border-red-600 text-red-600 bg-white rounded-t-lg'
                : 'border-transparent text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Cadastrar Novo Carro
          </button>
          <button
            onClick={() => setActiveTab('list')}
            className={`py-2.5 px-4 text-xs font-black border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'list'
                ? 'border-red-600 text-red-600 bg-white rounded-t-lg'
                : 'border-transparent text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <span>Gerenciar Carros Atuais</span>
            <span className="text-[10px] px-1.5 py-0.2 bg-zinc-200 rounded font-mono text-zinc-800">
              {vehicles.length}
            </span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'add' ? (
            <form onSubmit={handleCreateCar} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                    Marca *
                  </label>
                  <input
                    type="text"
                    required
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    placeholder="Ex: Toyota, Honda, Jeep..."
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-red-500 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                    Modelo *
                  </label>
                  <input
                    type="text"
                    required
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="Ex: Hilux, Compass, Civic..."
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-red-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                  Versão e Motorização
                </label>
                <input
                  type="text"
                  value={version}
                  onChange={(e) => setVersion(e.target.value)}
                  placeholder="Ex: SRX 2.8 4x4 Diesel Aut. / Longitude 1.3 Turbo"
                  className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-red-500 font-medium"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                    Preço (R$) *
                  </label>
                  <input
                    type="number"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Ex: 145000"
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-red-500 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                    Ano/Modelo
                  </label>
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="2023/2023"
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-red-500 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                    KM Rodados
                  </label>
                  <input
                    type="number"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                    placeholder="35000"
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-red-500 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                    Carroceria
                  </label>
                  <select
                    value={bodyType}
                    onChange={(e) => setBodyType(e.target.value as BodyType)}
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-2.5 py-2 text-xs font-semibold"
                  >
                    <option value="SUV">SUV</option>
                    <option value="Picape">Picape</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Hatch">Hatch</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                    Câmbio
                  </label>
                  <select
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value as TransmissionType)}
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-2.5 py-2 text-xs font-semibold"
                  >
                    <option value="Automático">Automático</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                    Combustível
                  </label>
                  <select
                    value={fuel}
                    onChange={(e) => setFuel(e.target.value as FuelType)}
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-2.5 py-2 text-xs font-semibold"
                  >
                    <option value="Flex">Flex</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Gasolina">Gasolina</option>
                    <option value="Híbrido">Híbrido</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                    Cor
                  </label>
                  <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="Branco Pérola"
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3 py-2 text-xs font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                    Final da Placa
                  </label>
                  <input
                    type="text"
                    value={plateEnd}
                    onChange={(e) => setPlateEnd(e.target.value)}
                    placeholder="8"
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3 py-2 text-xs font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                  URL da Foto Principal (opcional)
                </label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://... (deixe em branco para usar imagem padrão)"
                  className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3 py-2 text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                  Destaques (separados por vírgula)
                </label>
                <input
                  type="text"
                  value={highlights}
                  onChange={(e) => setHighlights(e.target.value)}
                  placeholder="Único Dono, Laudo Cautelar Aprovado, IPVA 2026 Pago"
                  className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3 py-2 text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                  Descrição do Veículo
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Detalhes adicionais sobre revisões, conservação e opcionais..."
                  className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl px-3 py-2 text-xs font-medium"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publicar no Estoque do Site</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-200 text-xs text-zinc-600 font-medium">
                <span>Carros no estoque atual:</span>
                <button
                  onClick={onResetToDefault}
                  className="text-red-600 font-bold hover:underline cursor-pointer"
                >
                  Restaurar estoque padrão
                </button>
              </div>

              {vehicles.map((v) => (
                <div
                  key={v.id}
                  className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={v.images[0]}
                      alt={v.model}
                      referrerPolicy="no-referrer"
                      className="w-14 h-11 object-cover rounded-lg bg-black shrink-0"
                    />
                    <div>
                      <h4 className="text-xs font-black text-zinc-950 font-display">
                        {v.make} {v.model} <span className="font-normal text-zinc-500">{v.version}</span>
                      </h4>
                      <div className="flex items-center gap-2 text-[11px] text-zinc-600 mt-0.5 font-semibold">
                        <span className="text-red-600 font-mono font-bold">
                          {formatCurrencyBRL(v.price)}
                        </span>
                        <span>·</span>
                        <span>{v.year}</span>
                        <span>·</span>
                        <span className={v.status === 'sold' ? 'text-zinc-500 line-through' : 'text-emerald-600 font-bold'}>
                          {v.status === 'sold' ? 'Vendido' : 'Disponível'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onToggleStatus(v.id)}
                      className="px-2.5 py-1 rounded bg-white hover:bg-zinc-100 text-[11px] text-zinc-800 border border-zinc-300 font-bold transition-colors cursor-pointer"
                    >
                      {v.status === 'sold' ? 'Reativar' : 'Marcar Vendido'}
                    </button>
                    <button
                      onClick={() => onDeleteVehicle(v.id)}
                      className="p-1.5 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors cursor-pointer"
                      title="Excluir carro"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
