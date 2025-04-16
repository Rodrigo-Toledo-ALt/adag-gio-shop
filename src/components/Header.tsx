
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { 
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ShoppingBag, Search, Menu, Music, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { isAuthenticated, currentUser } = useAuth();

  const performSearch = () => {
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };

  return (
    <header className="bg-white w-full border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Left side - Menu and Music icon */}
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="p-0">
                <Menu className="h-6 w-6 text-[#2c3e50]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-[#2c3e50] hover:text-[#8B5CF6] transition-colors">
                  Home
                </Link>
                <Link to="#" className="text-[#2c3e50] hover:text-[#8B5CF6] transition-colors">
                  Pianos
                </Link>
                <Link to="#" className="text-[#2c3e50] hover:text-[#8B5CF6] transition-colors">
                  About Us
                </Link>
                <Link to="#" className="text-[#2c3e50] hover:text-[#8B5CF6] transition-colors">
                  Contact
                </Link>
                {isAuthenticated && (
                  <Link to="/profile" className="text-[#2c3e50] hover:text-[#8B5CF6] transition-colors">
                    Mi Perfil
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
          <Music className="h-6 w-6 text-[#2c3e50]" />
        </div>

        {/* Center - Logo */}
        <Link to="/" className="flex-grow text-center">
          <h1 className="text-[#2c3e50] text-2xl font-serif font-bold tracking-widest">
            A D A G G I O
          </h1>
        </Link>

        {/* Right side - Search, User and Cart icons */}
        <div className="flex items-center gap-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="p-0">
                <Search className="h-6 w-6 text-[#2c3e50]" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <div className="grid gap-4 py-4">
                <div className="flex items-center gap-2">
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Búsqueda"
                    className="col-span-3"
                  />
                  <DialogClose asChild>
                    <Button onClick={performSearch}>BUSCAR</Button>
                  </DialogClose>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          {isAuthenticated ? (
            <Link to="/profile">
              <User className="h-6 w-6 text-[#2c3e50]" />
            </Link>
          ) : (
            <Link to="/login">
              <User className="h-6 w-6 text-[#2c3e50]" />
            </Link>
          )}
          
          <Link to="/cart">
            <ShoppingBag className="h-6 w-6 text-[#2c3e50]" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
