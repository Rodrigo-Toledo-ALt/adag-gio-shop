
export const slides = [
  { 
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&h=600', 
    title: 'Steinway Limited Edition', 
    description: 'Nuevo Steinway & Sons Noé' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=1200&h=600', 
    title: 'Exclusivo Modelo', 
    description: 'El Arte del Sonido' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1571974599782-fac9270d4f90?auto=format&fit=crop&w=1200&h=600', 
    title: 'Diseño Único', 
    description: 'Un Piano de Lujo' 
  }
];

export const pianos = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1584882936911-317da769520d?auto=format&fit=crop&w=600&h=600',
    name: 'STEINWAY & SONS',
    model: 'K-132 CHROME BLANCO',
    price: '39.325',
    rentOption: '464',
    description: 'El K-132 CHROME BLANCO es un piano vertical de lujo de la prestigiosa marca Steinway & Sons. Destaca por su diseño elegante en acabado cromado blanco y su sonido excepcional, característico de la firma.',
    specifications: [
      { name: 'Altura', value: '132 cm' },
      { name: 'Ancho', value: '155 cm' },
      { name: 'Profundidad', value: '67 cm' },
      { name: 'Peso', value: '290 kg' },
      { name: 'Número de teclas', value: '88' },
      { name: 'Material de teclas', value: 'Marfil sintético' },
      { name: 'Pedales', value: '3 (Sostenuto, Una Corda, Sustain)' },
      { name: 'Acabado', value: 'Cromado blanco de alta calidad' }
    ],
    features: [
      'Acción Acelerada Steinway',
      'Tabla armónica de abeto Sitka',
      'Cuerdas fabricadas en la propia fábrica Steinway',
      'Sistema de pedal patentado',
      'Dispositivo de repetición Steinway'
    ]
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1583857671904-a0c1fa8471ba?auto=format&fit=crop&w=600&h=600',
    name: 'BOSTON',
    model: 'GP-193 PE II',
    price: '39.325',
    rentOption: '464',
    description: 'El Boston GP-193 PE II es un piano de cola diseñado por Steinway & Sons que combina calidad artesanal con un precio más accesible. Posee un sonido rico y expresivo ideal para músicos exigentes.',
    specifications: [
      { name: 'Longitud', value: '193 cm' },
      { name: 'Ancho', value: '156 cm' },
      { name: 'Altura', value: '102 cm' },
      { name: 'Peso', value: '374 kg' },
      { name: 'Número de teclas', value: '88' },
      { name: 'Material de teclas', value: 'Marfil sintético' },
      { name: 'Pedales', value: '3 (Sostenuto, Una Corda, Sustain)' },
      { name: 'Acabado', value: 'Negro pulido' }
    ],
    features: [
      'Diseño por Steinway & Sons',
      'Acción de gran sensibilidad',
      'Tabla armónica de abeto sólido',
      'Bastidor de fundición reforzado',
      'Sistema de pedal patentado'
    ]
  },
  {
    id: 3,
    image: '/src/assets/Spiro.png',
    name: 'STEINWAY & SONS',
    model: 'Spiro',
    price: '390.325',
    rentOption: '4604',
    description: 'El Steinway & Sons Spirio es un piano de alta tecnología que combina la legendaria calidad Steinway con un sistema de reproducción digital avanzado. Reproduce interpretaciones de pianistas famosos con perfecta precisión.',
    specifications: [
      { name: 'Tipo', value: 'Piano de cola con sistema de reproducción' },
      { name: 'Longitud', value: '211 cm (Modelo B)' },
      { name: 'Ancho', value: '148 cm' },
      { name: 'Altura', value: '102 cm' },
      { name: 'Peso', value: '435 kg' },
      { name: 'Sistema', value: 'Spirio con reproducción de alta resolución' },
      { name: 'Conectividad', value: 'Wi-Fi, Bluetooth, iPad compatible' },
      { name: 'Acabado', value: 'Negro pulido (otros disponibles)' }
    ],
    features: [
      'Sistema Spirio de alta resolución',
      'Biblioteca de música exclusiva',
      'Control mediante iPad',
      'Actualización constante de contenido',
      'Grabación y reproducción de interpretaciones propias',
      'Calidad de sonido excepcional Steinway'
    ]
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1593142659345-59028deda450?auto=format&fit=crop&w=600&h=600',
    name: 'STEINWAY & SONS',
    model: 'B-211 8x8',
    price: '39.325',
    rentOption: '464',
    description: 'El Steinway & Sons B-211 8x8 es una edición especial Masterpiece con acabado en madera de Macassar. Este piano de cola de concierto combina la excelencia acústica Steinway con un diseño de lujo inigualable.',
    specifications: [
      { name: 'Longitud', value: '211 cm' },
      { name: 'Ancho', value: '148 cm' },
      { name: 'Altura', value: '102 cm' },
      { name: 'Peso', value: '435 kg' },
      { name: 'Número de teclas', value: '88' },
      { name: 'Material de teclas', value: 'Marfil sintético' },
      { name: 'Acabado', value: 'Macassar edición especial 8x8' },
      { name: 'Pedales', value: '3 (Sostenuto, Una Corda, Sustain)' }
    ],
    features: [
      'Edición especial Masterpiece',
      'Acabado en Macassar exclusivo',
      'Acción Accelerated Action® de Steinway',
      'Tabla armónica de abeto Sitka seleccionado',
      'Cuerdas Steinway & Sons de fabricación propia',
      'Diseño acústico optimizado'
    ]
  }
];
