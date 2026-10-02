import { StoreInfo, Vehicle } from '../types/vehicle';

// Generated image assets
import hiluxImg from '../assets/images/car_toyota_hilux_white_1790448248257.jpg';
import civicImg from '../assets/images/car_honda_civic_black_1790448258771.jpg';
import compassImg from '../assets/images/car_jeep_compass_grey_1790448269114.jpg';
import bmwImg from '../assets/images/car_bmw_sedan_blue_1790448278215.jpg';

// Real stock photography assets (1440x1440 high-res)
import car1Hilux from '../assets/images/car_1.jpg';
import car2Bmw from '../assets/images/car_2.jpg';
import car3Compass from '../assets/images/car_3.webp';
import car4Civic from '../assets/images/car_4.jpg';
import car5Toro from '../assets/images/car_5.jpg';
import car6Nivus from '../assets/images/car_6.jpg';
import car7Onix from '../assets/images/car_7.jpg';
import car8Creta from '../assets/images/car_8.jpg';
import car9Img from '../assets/images/car_9.webp';
import car10Img from '../assets/images/car_10.jpg';

export const STORE_INFO: StoreInfo = {
  name: 'Cavera Veículos',
  shortName: 'Cavera Veículos',
  tagline: 'Veículos Selecionados & Procedência em Paracatu - MG',
  street: 'Avenida Israel Pinheiro',
  number: '514',
  neighborhood: 'Paracatuzinho',
  city: 'Paracatu',
  state: 'MG',
  country: 'Brasil',
  address: 'Avenida Israel Pinheiro, 514, Paracatuzinho, Paracatu - MG, Brasil',
  phone: '(38) 99732-8446',
  whatsapp: '5538997328446',
  whatsappUrl: 'https://wa.me/5538997328446',
  instagram: '@caveraveiculos',
  openingHoursWeekdays: '08:00 às 18:00',
  openingHoursSaturday: '08:00 às 13:00',
  googleMapsUrl: 'https://maps.app.goo.gl/bcYE13VtXwUeKszB6',
  wazeUrl: 'https://waze.com/ul?q=Avenida+Israel+Pinheiro+514+Paracatu+MG',
};

export const INITIAL_VEHICLES: Vehicle[] = [
  {
    id: 'fiat-strada-adventure-2013',
    make: 'Fiat',
    model: 'Strada',
    version: 'Adventure 1.8',
    year: '2013/2013',
    price: 52900,
    mileage: 118000,
    fuel: 'Flex',
    transmission: 'Manual',
    bodyType: 'Picape',
    color: 'Prata',
    plateEnd: '7',
    images: [
      car1Hilux,
      'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1200&q=80',
    ],
    highlights: ['Versão Adventure 1.8', 'Cabine Impecável', 'Laudo Cautelar Aprovado', 'Excelente para Trabalho e Lazer'],
    features: [
      'Motor 1.8 E.torQ Flex forte e confiável',
      'Ar-condicionado e Direção Hidráulica',
      'Vidros e Travas Elétricas',
      'Protetor de Caçamba e Capota Marítima',
      'Rodas de Liga Leve Originais Adventure',
      'Faróis de Milha e Neblina Auxiliares',
      'Computador de Bordo e Som Integrado',
    ],
    description: 'Fiat Strada Adventure 1.8 2013/2013 em excelente estado de conservação. Mecânica 100% revisada, suspensão firme e interior muito bem cuidado. Ótima opção para trabalho ou lazer na Cavera Veículos.',
    status: 'available',
    isFeatured: true,
  },
  {
    id: 'fiat-mobi-trekking-2023',
    make: 'Fiat',
    model: 'Mobi',
    version: 'Trekking 1.0',
    year: '2022/2023',
    price: 62900,
    mileage: 38000,
    fuel: 'Flex',
    transmission: 'Manual',
    bodyType: 'Hatch',
    color: 'Cinza Strato',
    plateEnd: '9',
    images: [
      car2Bmw,
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
    ],
    highlights: ['Versão Aventureira Trekking', 'Central Multimídia Uconnect', 'Super Econômico e Completo'],
    features: [
      'Central Multimídia com Apple CarPlay e Android Auto sem fio',
      'Barras Longitudinais de Teto e Teto Bicolor',
      'Direção Assistida e Ar-condicionado Eficiente',
      'Vidros e Travas Elétricas com Chave Canivete',
      'Volante Multifuncional com Comandos de Áudio',
      'Sensor de Estacionamento Traseiro',
      'Excelente consumo urbano (super econômico)',
    ],
    description: 'Fiat Mobi Trekking 1.0 2022/2023 completíssimo. Visual aventureiro diferenciado, conectividade moderna e altíssima economia de combustível. Perfeito para uso diário. Venha conferir na Cavera Veículos.',
    status: 'available',
    isFeatured: true,
  },
  {
    id: 'ford-focus-se-2016',
    make: 'Ford',
    model: 'Focus',
    version: 'SE 2.0',
    year: '2016/2016',
    price: 54900,
    mileage: 89000,
    fuel: 'Flex',
    transmission: 'Automático',
    bodyType: 'Hatch',
    color: 'Branco Ártico',
    plateEnd: '4',
    images: [
      car3Compass,
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    ],
    highlights: ['Motor 2.0 Direct Flex 178cv', 'Câmbio com Paddle Shifts', 'Controle de Tração e Estabilidade'],
    features: [
      'Motor 2.0 Direct Flex com Injeção Direta de 178cv',
      'Câmbio Sequencial com Paddle Shifts no Volante',
      'Controle Eletrônico de Estabilidade (ESC) e Tração (TCS)',
      'Sistema SYNC com Conexão Bluetooth e Comandos por Voz',
      'Rodas de Liga Leve Aro 17 Originais',
      'Freios a Disco nas 4 Rodas com ABS e EBD',
      'Piloto Automático e Limitador de Velocidade',
    ],
    description: 'Ford Focus SE 2.0 2016/2016. Um dos hatches médios com melhor dirigibilidade, dinâmica e estabilidade do mercado. Potente, confortável e muito bem conservado na Cavera Veículos em Paracatu.',
    status: 'available',
    isFeatured: true,
  },
  {
    id: 'chevrolet-onix-lt-2013',
    make: 'Chevrolet',
    model: 'Onix',
    version: '1.0 LT',
    year: '2013/2013',
    price: 43900,
    mileage: 95000,
    fuel: 'Flex',
    transmission: 'Manual',
    bodyType: 'Hatch',
    color: 'Preto',
    plateEnd: '2',
    images: [
      car4Civic,
      'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1200&q=80',
    ],
    highlights: ['Versão 1.0 LT Completa', 'Central MyLink com Bluetooth', 'Econômico e Confiável'],
    features: [
      'Central MyLink com Tela Touchscreen e Bluetooth',
      'Ar-condicionado e Direção Hidráulica',
      'Vidros e Travas Elétricas',
      'Airbags Frontais e Freios ABS',
      'Excelente Consumo de Combustível',
      'Sensor de Estacionamento',
    ],
    description: 'Chevrolet Onix 1.0 LT 2013/2013 muito bem conservado. Veículo econômico, mecânica confiável e de manutenção barata. Ideal para o dia a dia. Venha conferir na Cavera Veículos.',
    status: 'available',
    isFeatured: true,
  },
  {
    id: 'volkswagen-fox-2009',
    make: 'Volkswagen',
    model: 'Fox',
    version: '1.6',
    year: '2008/2009',
    price: 25900,
    mileage: 145000,
    fuel: 'Flex',
    transmission: 'Manual',
    bodyType: 'Hatch',
    color: 'Vermelho',
    plateEnd: '5',
    images: [
      car5Toro,
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
    ],
    highlights: ['Motor 1.6 Potente', 'Excelente Espaço Interno', 'Ótimo Custo-Benefício'],
    features: [
      'Motor 1.6 Flex com excelente torque',
      'Direção Hidráulica e Ar-condicionado',
      'Vidros Elétricos',
      'Regulagem de Altura do Banco do Motorista',
      'Espaço Interno Amplo com Teto Alto',
      'Pneus em Bom Estado',
    ],
    description: 'Volkswagen Fox 1.6 2008/2009. Carro ágil, motor forte e espaçoso para a família. Ótima oportunidade de seminovo acessível com procedência na Cavera Veículos.',
    status: 'available',
    isFeatured: false,
  },
  {
    id: 'caoa-chery-tiggo-7-sport-2025',
    make: 'Caoa Chery',
    model: 'Tiggo 7',
    version: 'Sport',
    year: '2024/2025',
    price: 129900,
    mileage: 12000,
    fuel: 'Flex',
    transmission: 'Automático',
    bodyType: 'SUV',
    color: 'Cinza Metálico',
    plateEnd: '3',
    images: [
      car6Nivus,
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
    ],
    highlights: ['Versão Sport 2024/2025', 'Garantia de Fábrica', 'Câmbio Automático e Painel Digital'],
    features: [
      'Motor Turbo Flex com Câmbio Automático',
      'Painel Digital de Instrumentos em Alta Resolução',
      'Central Multimídia Grande com Apple CarPlay e Android Auto',
      'Bancos com Acabamento Premium',
      'Freio de Estacionamento Eletrônico com Auto Hold',
      'Faróis Full LED com DRL',
      'Câmera de Ré e Sensores de Estacionamento',
    ],
    description: 'Caoa Chery Tiggo 7 Sport 2024/2025 seminovo em estado de zero km. SUV moderno, super espaçoso, repleto de tecnologia e ainda no período de garantia de fábrica. Venha fazer um test drive na Cavera Veículos.',
    status: 'available',
    isFeatured: false,
  },
  {
    id: 'chevrolet-classic-ls-2012',
    make: 'Chevrolet',
    model: 'Classic',
    version: '1.0 LS',
    year: '2011/2012',
    price: 24900,
    mileage: 132000,
    fuel: 'Flex',
    transmission: 'Manual',
    bodyType: 'Sedan',
    color: 'Prata',
    plateEnd: '6',
    images: [
      car7Onix,
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80',
    ],
    highlights: ['Porta-Malas Amplo', 'Super Econômico', 'Manutenção Muito Barata'],
    features: [
      'Motor 1.0 VHC-E Flex potente e econômico',
      'Porta-malas espaçoso de 390 litros',
      'Ar Quente e Desembaçador Traseiro',
      'Travas e Vidros Elétricos',
      'Excelente relação custo-benefício',
      'Mecânica 100% revisada com procedência',
    ],
    description: 'Chevrolet Classic 1.0 LS 2011/2012. O sedã compacto consagrado pela durabilidade, baixo custo de manutenção e consumo exemplar. Perfeito para trabalho e família na Cavera Veículos.',
    status: 'available',
    isFeatured: false,
  },
  {
    id: 'volkswagen-gol-2011',
    make: 'Volkswagen',
    model: 'Gol',
    version: '1.0',
    year: '2010/2011',
    price: 31000,
    mileage: 125000,
    fuel: 'Flex',
    transmission: 'Manual',
    bodyType: 'Hatch',
    color: 'Branco',
    plateEnd: '1',
    images: [
      car8Creta,
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
    ],
    highlights: ['Líder de Vendas', 'Econômico e Confiável', 'Fácil Revenda'],
    features: [
      'Motor 1.0 Total Flex econômico',
      'Direção Hidráulica e Ar-condicionado',
      'Vidros e Travas Elétricas',
      'Limpador e Desembaçador Traseiro',
      'Pneus em Ótimo Estado',
      'Documentação 100% em dia',
    ],
    description: 'Volkswagen Gol 1.0 2010/2011. Um dos carros mais queridos e confiáveis do Brasil. Carro robusto, ágil e muito econômico. Revisado e pronto para transferência na Cavera Veículos.',
    status: 'available',
    isFeatured: false,
  },
  {
    id: 'yamaha-fazer-250-2016',
    make: 'Yamaha',
    model: 'Fazer',
    version: '250',
    year: '2015/2016',
    price: 14900,
    mileage: 52000,
    fuel: 'Flex',
    transmission: 'Manual',
    bodyType: 'Moto',
    color: 'Preto',
    plateEnd: '9',
    images: [
      car9Img,
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
    ],
    highlights: ['Motor 250cc Confiável', 'Injeção Eletrônica', 'Excelente Custo-Benefício'],
    features: [
      'Motor BlueFlex 250cc durável e resistente',
      'Freios a disco nas duas rodas',
      'Painel digital completo com conta-giros',
      'Partida elétrica',
      'Excelente autonomia para cidade e estrada',
      'Revisada com pneus novos',
    ],
    description: 'Yamaha Fazer 250 2015/2016. Moto conhecida pelo conforto na pilotagem, motor resistente e ótima dirigibilidade. Ideal para quem busca agilidade e economia com potência na Cavera Veículos.',
    status: 'available',
    isFeatured: true,
  },
  {
    id: 'yamaha-fazer-250-2024',
    make: 'Yamaha',
    model: 'Fazer',
    version: '250',
    year: '2023/2024',
    price: 23900,
    mileage: 11000,
    fuel: 'Flex',
    transmission: 'Manual',
    bodyType: 'Moto',
    color: 'Azul Metálico',
    plateEnd: '4',
    images: [
      car10Img,
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
    ],
    highlights: ['Freios ABS nas Duas Rodas', 'Farol Projetor LED com DRL', 'Garantia de Procedência'],
    features: [
      'Sistema de Freios ABS de dois canais',
      'Farol com projetor de LED e luz diurna DRL',
      'Painel 100% digital em blackout',
      'Design agressivo e moderno de última geração',
      'Banco biposto em dois níveis com ótima ergonomia',
      'Baixíssima quilometragem',
    ],
    description: 'Yamaha Fazer 250 2023/2024 seminova impecável. Visual imponente, tecnologia moderna com freios ABS e iluminação LED completa. Moto de procedência garantida na Cavera Veículos.',
    status: 'available',
    isFeatured: false,
  },
];

export const INSTAGRAM_HIGHLIGHTS = [
  {
    id: 'novidades',
    title: 'Novidades',
    icon: 'Sparkles',
    coverImage: hiluxImg,
    badge: 'Recentes',
    storyText: 'Chegaram novas opções de picapes e SUVs selecionados esta semana na loja!',
  },
  {
    id: 'financiamento',
    title: 'Financiamento',
    icon: 'Percent',
    coverImage: bmwImg,
    badge: 'Taxas VIP',
    storyText: 'Aprovação rápida em até 15 minutos com os principais bancos: Santander, BV, Itaú e Bradesco.',
  },
  {
    id: 'laudo',
    title: 'Laudo 100%',
    icon: 'ShieldCheck',
    coverImage: compassImg,
    badge: 'Procedência',
    storyText: 'Todos os nossos veículos passam por rigorosa perícia cautelar sem sinistro ou leilão.',
  },
  {
    id: 'loja',
    title: 'Nossa Loja',
    icon: 'MapPin',
    coverImage: civicImg,
    badge: 'Paracatu',
    storyText: 'Venha tomar um café conosco na Av. Israel Pinheiro, 514, Paracatuzinho. Estacionamento próprio.',
  },
  {
    id: 'troca',
    title: 'Troca & Compra',
    icon: 'ArrowLeftRight',
    coverImage: hiluxImg,
    badge: 'Melhor Avaliação',
    storyText: 'Avaliamos seu carro usado com justa cotação da tabela FIPE na troca pelo seu novo veículo.',
  },
];

export function formatCurrencyBRL(value: number): string {
  const formatted = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
  return `R$ ${formatted}`;
}

export function formatKm(km: number): string {
  return `${new Intl.NumberFormat('pt-BR').format(km)} km`;
}

export function generateWhatsAppCarLink(vehicle?: Vehicle, phone: string = STORE_INFO.whatsapp): string {
  return `https://wa.me/${phone}`;
}

export function generateGeneralWhatsAppLink(text?: string, phone: string = STORE_INFO.whatsapp): string {
  if (text) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }
  return `https://wa.me/${phone}`;
}

export function generateTradeInWhatsAppLink(
  data: {
    clientName: string;
    clientPhone: string;
    tradeModel: string;
    tradeYear: string;
    tradeKm: string;
    interestVehicle?: string;
  },
  phone: string = STORE_INFO.whatsapp
): string {
  const message = `Olá! Gostaria de uma avaliação para troca de veículo:
Nome: ${data.clientName || 'Cliente'}
Telefone: ${data.clientPhone || 'Não informado'}
Meu Carro: ${data.tradeModel} (${data.tradeYear}) - ${data.tradeKm} km
${data.interestVehicle ? `Interesse no veículo: ${data.interestVehicle}` : 'Gostaria de ver as opções no estoque'}
Aguardo retorno da equipe de Paracatu!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
