
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import Header from '@/components/Header';
import { pianos } from '@/data/pianos';
import { useCart } from '@/contexts/CartContext';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const pianoId = parseInt(id || '0');
  const piano = pianos.find(piano => piano.id === pianoId);
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  
  if (!piano) {
    return <div>Piano no encontrado</div>;
  }
  
  const handleAddToCart = () => {
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      navigate('/login', { state: { from: { pathname: `/product/${id}` } } });
      return;
    }
    
    // Add quantity property to match Piano type in CartContext
    addToCart({
      ...piano,
      quantity: 1 // Default quantity when adding to cart
    });
    toast.success(`${piano.name} ${piano.model} añadido al carrito`);
  };

  // Mock description and specs
  const description = "Este magnífico piano ofrece una calidad de sonido excepcional con una mecánica precisa y respuesta dinámica. Ideal para músicos profesionales y aficionados exigentes que buscan un instrumento de alto rendimiento y elegante diseño.";
  
  const specs = {
    dimensions: "Length: 211cm | Width: 148cm | Height: 102cm",
    weight: "500 kg",
    finish: "High-gloss polyester",
    keyboard: "88 keys with Ebony and Spruce keytops",
    construction: "Solid Spruce soundboard, Maple rim"
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Images */}
          <div className="bg-[#EBEFEF] rounded-lg p-4 flex flex-col">
            <div className="overflow-hidden rounded-lg mb-4">
              <img 
                src={piano.image} 
                alt={`${piano.name} ${piano.model}`} 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          {/* Details */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#2c3e50] tracking-wide uppercase">
              {piano.name}
            </h1>
            <h2 className="text-xl text-gray-600 mb-4">{piano.model}</h2>
            
            <p className="text-2xl font-bold text-[#2c3e50] mb-2">{piano.price} €</p>
            {piano.rentOption && (
              <p className="text-gray-500 mb-6">Opción a compra: {piano.rentOption} €/mes</p>
            )}
            
            <div className="my-6">
              <p className="text-gray-700 mb-4">{description}</p>
              
              <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#2c3e50]">Especificaciones</h3>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="pt-2">
                  <div className="text-sm space-y-2">
                    <p><strong>Dimensiones:</strong> {specs.dimensions}</p>
                    <p><strong>Peso:</strong> {specs.weight}</p>
                    <p><strong>Acabado:</strong> {specs.finish}</p>
                    <p><strong>Teclado:</strong> {specs.keyboard}</p>
                    <p><strong>Construcción:</strong> {specs.construction}</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
            
            <div className="mt-auto space-y-4">
              <Button 
                onClick={handleAddToCart}
                className="w-full bg-[#2c3e50] hover:bg-[#1a2530]"
              >
                AÑADIR AL CARRITO
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-[#2c3e50] text-[#2c3e50]"
                onClick={() => navigate('/')}
              >
                VOLVER
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

