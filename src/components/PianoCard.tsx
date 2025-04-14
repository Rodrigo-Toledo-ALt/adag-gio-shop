
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface PianoCardProps {
  id: number;
  image: string;
  name: string;
  model: string;
  price: string;
  rentOption?: string;
}

const PianoCard: React.FC<PianoCardProps> = ({
  id,
  image,
  name,
  model,
  price,
  rentOption
}) => {
  return (
    <div className="text-center p-5 rounded-lg transition-transform duration-300 cursor-pointer hover:scale-105 text-[#2c3e50] min-h-[650px]">
      <Link to={`/product/${id}`}>
        <div className="mb-4 bg-[#EBEFEF] rounded-md min-h-[440px] flex items-center justify-center">
          <img 
            src={image} 
            alt={`${name} ${model}`} 
            className="w-full max-w-[400px] h-auto rounded-md"
          />
        </div>
        <h3 className="text-lg font-serif font-semibold uppercase">{name}</h3>
        <p className="text-sm mb-2">{model}</p>
        <p className="font-bold text-xl mb-1">{price} €</p>
        {rentOption && (
          <p className="text-sm text-gray-500 mb-3">Opción a compra: {rentOption} €/mes</p>
        )}
      </Link>
      <Link to={`/product/${id}`}>
        <Button variant="outline" className="mt-3 border-[#2c3e50] text-[#2c3e50] hover:bg-[#2c3e50] hover:text-white transition-colors">
          MÁS INFO
        </Button>
      </Link>
    </div>
  );
};

export default PianoCard;
