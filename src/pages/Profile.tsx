
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import AdminDashboard from '@/components/AdminDashboard';
import UserDashboard from '@/components/UserDashboard';

const Profile = () => {
  const { currentUser, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-serif font-bold text-[#2c3e50]">
            Perfil de {currentUser.name}
          </h1>
          <Button variant="outline" onClick={handleLogout} className="border-[#2c3e50] text-[#2c3e50]">
            Cerrar Sesión
          </Button>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-serif font-semibold text-[#2c3e50] mb-4">Información Personal</h2>
          <div className="space-y-2">
            <p><strong>Nombre:</strong> {currentUser.name}</p>
            <p><strong>Email:</strong> {currentUser.email}</p>
            <p><strong>Rol:</strong> {isAdmin ? 'Administrador' : 'Usuario'}</p>
          </div>
        </div>

        {isAdmin ? <AdminDashboard /> : <UserDashboard />}
      </div>
    </div>
  );
};

export default Profile;
