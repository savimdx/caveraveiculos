export type BodyType = 'SUV' | 'Picape' | 'Sedan' | 'Hatch' | 'Moto';
export type FuelType = 'Flex' | 'Diesel' | 'Gasolina' | 'Híbrido';
export type TransmissionType = 'Automático' | 'Manual';

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  version: string;
  year: string; // e.g. "2023/2023"
  price: number;
  mileage: number; // in km
  fuel: FuelType;
  transmission: TransmissionType;
  bodyType: BodyType;
  color: string;
  plateEnd: string;
  images: string[];
  highlights: string[];
  features: string[];
  description: string;
  status: 'available' | 'reserved' | 'sold';
  isFeatured?: boolean;
}

export interface StoreInfo {
  name: string;
  shortName: string;
  tagline: string;
  address: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  whatsapp: string; // digits only with country code, e.g. "5538999999999"
  whatsappUrl?: string;
  instagram: string;
  openingHoursWeekdays: string;
  openingHoursSaturday: string;
  googleMapsUrl: string;
  wazeUrl: string;
}
