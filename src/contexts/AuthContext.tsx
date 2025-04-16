
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";

// Define user types and authentication context types
type UserRole = 'admin' | 'user';

interface User {
  id: number;
  email: string;
  name: string;
  role: UserRole;
}

interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAdmin: boolean;
}

// Mock users for demonstration purposes
const MOCK_USERS: User[] = [
  { id: 1, email: 'admin@adaggio.com', name: 'Admin User', role: 'admin' },
  { id: 2, email: 'user@example.com', name: 'Regular User', role: 'user' }
];

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const isAuthenticated = !!currentUser;
  const isAdmin = currentUser?.role === 'admin';

  // Load user from localStorage on initial render
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, validate credentials against a backend
    const user = MOCK_USERS.find(u => u.email === email);
    
    if (user && password === 'password') { // Simple mock password check
      setCurrentUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success(`Bienvenido, ${user.name}`);
      return true;
    }
    
    toast.error('Credenciales inválidas');
    return false;
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
    toast.info('Sesión cerrada correctamente');
  };

  return (
    <AuthContext.Provider value={{ currentUser, isAuthenticated, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
