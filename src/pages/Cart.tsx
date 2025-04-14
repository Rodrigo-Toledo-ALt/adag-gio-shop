
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const formatCurrency = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };
  
  const handleCheckout = () => {
    // In a real app, this would navigate to a checkout page
    alert('Procesando pedido. Gracias por su compra!');
    clearCart();
    navigate('/');
  };
  
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-2xl font-serif mb-4 text-[#2c3e50]">Tu carrito está vacío</h1>
          <p className="text-gray-500 mb-6">Descubre nuestros pianos exclusivos</p>
          <Link to="/">
            <Button>
              Volver a la tienda
            </Button>
          </Link>
        </div>
        <footer className="py-6 text-center text-gray-500 mt-12 border-t">
          <p>© {new Date().getFullYear()} ADAGGIO - Piano Store. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold mb-8 text-[#2c3e50]">Tu Carrito</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cart.map((item) => {
              const itemPrice = parseFloat(item.price.replace(/\./g, '').replace(',', '.'));
              const totalItemPrice = itemPrice * item.quantity;
              
              return (
                <div key={item.id} className="flex flex-col md:flex-row gap-4 border-b py-6">
                  {/* Product Image */}
                  <div className="md:w-1/4 bg-[#EBEFEF] rounded-md p-2 flex items-center justify-center">
                    <img src={item.image} alt={item.model} className="h-auto max-h-[120px]" />
                  </div>
                  
                  {/* Product Details */}
                  <div className="md:w-3/4 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium text-[#2c3e50]">{item.name}</h3>
                          <p className="text-gray-600">{item.model}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                      
                      <p className="text-[#2c3e50] font-bold mt-2">
                        {formatCurrency(itemPrice)}
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      {/* Total price for this item */}
                      <p className="font-bold text-[#2c3e50]">
                        {formatCurrency(totalItemPrice)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-serif font-semibold mb-4 text-[#2c3e50]">
                Resumen del Pedido
              </h2>
              
              <div className="space-y-2 mb-4">
                {cart.map((item) => {
                  const itemPrice = parseFloat(item.price.replace(/\./g, '').replace(',', '.'));
                  const totalItemPrice = itemPrice * item.quantity;
                  
                  return (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.model} x{item.quantity}</span>
                      <span>{formatCurrency(totalItemPrice)}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-bold text-[#2c3e50]">
                  <span>Total</span>
                  <span>{formatCurrency(getTotalPrice())}</span>
                </div>
              </div>
              
              <Button 
                className="w-full mt-6 bg-[#2c3e50] hover:bg-[#1a2530] text-white"
                onClick={handleCheckout}
              >
                FINALIZAR COMPRA
              </Button>
              
              <Link to="/">
                <Button variant="outline" className="w-full mt-4">
                  CONTINUAR COMPRANDO
                </Button>
              </Link>
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

export default Cart;
