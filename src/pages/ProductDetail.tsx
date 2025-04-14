
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { pianos } from '@/data/pianos';
import { useCart } from '@/contexts/CartContext';
import { MinusCircle, PlusCircle } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  
  const productId = parseInt(id || '0');
  const piano = pianos.find(p => p.id === productId);
  
  if (!piano) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif mb-4">Producto no encontrado</h1>
            <Button onClick={() => navigate('/')}>
              Volver a la tienda
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);
  
  const handleAddToCart = () => {
    addToCart({
      ...piano,
      quantity
    });
    
    navigate('/cart');
  };
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-[#EBEFEF] rounded-lg flex items-center justify-center p-6">
            <img 
              src={piano.image} 
              alt={`${piano.name} ${piano.model}`}
              className="max-w-full h-auto"
            />
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-8">
              <h1 className="text-3xl font-serif font-bold text-[#2c3e50] mb-2">{piano.name}</h1>
              <h2 className="text-xl text-[#2c3e50] mb-4">{piano.model}</h2>
              <p className="text-2xl font-bold text-[#2c3e50] mb-2">{piano.price} €</p>
              {piano.rentOption && (
                <p className="text-gray-500 mb-6">
                  Opción a compra: {piano.rentOption} €/mes
                </p>
              )}
              <p className="text-[#2c3e50] mb-8">{piano.description}</p>
              
              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#2c3e50]">Cantidad:</span>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={decreaseQuantity}
                  >
                    <MinusCircle className="h-5 w-5" />
                  </Button>
                  <span className="text-xl font-medium w-8 text-center">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={increaseQuantity}
                  >
                    <PlusCircle className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <Button 
                className="w-full bg-[#2c3e50] hover:bg-[#1a2530] text-white mb-8"
                onClick={handleAddToCart}
              >
                AÑADIR AL CARRITO
              </Button>
            </div>
            
            {/* Specifications */}
            <div className="border-t pt-6">
              <h3 className="text-xl font-serif font-semibold mb-4 text-[#2c3e50]">
                Especificaciones
              </h3>
              <div className="grid grid-cols-2 gap-y-2">
                {piano.specifications.map((spec, index) => (
                  <div key={index} className={index % 2 === 0 ? "col-span-2 md:col-span-1" : "col-span-2 md:col-span-1"}>
                    <p className="text-sm">
                      <span className="font-medium">{spec.name}:</span> {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Features */}
            <div className="border-t mt-6 pt-6">
              <h3 className="text-xl font-serif font-semibold mb-4 text-[#2c3e50]">
                Características
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {piano.features.map((feature, index) => (
                  <li key={index} className="text-sm text-[#2c3e50]">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6 text-center text-gray-500 mt-12 border-t">
        <p>© {new Date().getFullYear()} ADAGGIO - Piano Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductDetail;
