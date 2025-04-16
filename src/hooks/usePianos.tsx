
import { useState, useEffect } from 'react';
import { pianos as initialPianos } from '@/data/pianos';

export interface Piano {
  id: number;
  name: string;
  model: string;
  price: string;
  image: string;
  rentOption?: string;
  description?: string;
}

export const usePianos = () => {
  // Try to get pianos from localStorage or use initial data
  const [pianos, setPianos] = useState<Piano[]>(() => {
    const savedPianos = localStorage.getItem('pianos');
    return savedPianos ? JSON.parse(savedPianos) : initialPianos;
  });

  // Save pianos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('pianos', JSON.stringify(pianos));
  }, [pianos]);

  const addPiano = (piano: Piano) => {
    setPianos([...pianos, piano]);
  };

  const updatePiano = (id: number, updatedPiano: Piano) => {
    setPianos(pianos.map(piano => piano.id === id ? updatedPiano : piano));
  };

  const deletePiano = (id: number) => {
    setPianos(pianos.filter(piano => piano.id !== id));
  };

  return {
    pianos,
    addPiano,
    updatePiano,
    deletePiano
  };
};
