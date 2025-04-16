
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import { Music } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the redirect path from location state or default to '/'
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await login(email, password);
    
    if (success) {
      // Redirect to the page they were trying to access
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Music className="mx-auto h-12 w-12 text-[#2c3e50]" />
            <h2 className="mt-6 text-3xl font-serif font-bold text-[#2c3e50] tracking-widest">INICIAR SESIÓN</h2>
            <p className="mt-2 text-sm text-gray-600">
              Accede a tu cuenta para continuar
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <Label htmlFor="email" className="text-[#2c3e50]">Correo electrónico</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="password" className="text-[#2c3e50]">Contraseña</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="text-sm text-right">
              <a href="#" className="font-medium text-[#2c3e50] hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <div>
              <Button type="submit" className="w-full bg-[#2c3e50] hover:bg-[#1a2530]">
                INICIAR SESIÓN
              </Button>
            </div>
          </form>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Credenciales de prueba:
              <br />
              Admin: admin@adaggio.com / password
              <br />
              Usuario: user@example.com / password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
