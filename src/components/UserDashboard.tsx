
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Music } from 'lucide-react';

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-serif font-semibold text-[#2c3e50] mb-4">
          Mis Pedidos
        </h2>
        
        {/* If user has no orders */}
        <div className="text-center py-10">
          <ShoppingBag className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No hay pedidos todavía</h3>
          <p className="text-gray-500 mb-6">Explore nuestra colección de pianos y realice su primera compra.</p>
          <Button 
            onClick={() => navigate('/')} 
            className="bg-[#2c3e50] hover:bg-[#1a2530]"
          >
            <Music className="mr-2 h-4 w-4" /> Explorar Pianos
          </Button>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-serif font-semibold text-[#2c3e50] mb-4">
          Configuración de la Cuenta
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-gray-900">Cambiar Contraseña</h3>
              <p className="text-sm text-gray-500">Actualice su contraseña regularmente para mayor seguridad</p>
            </div>
            <Button variant="outline" className="border-[#2c3e50] text-[#2c3e50]">
              Cambiar
            </Button>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-gray-900">Actualizar Información Personal</h3>
              <p className="text-sm text-gray-500">Mantenga actualizada su información de contacto</p>
            </div>
            <Button variant="outline" className="border-[#2c3e50] text-[#2c3e50]">
              Editar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
