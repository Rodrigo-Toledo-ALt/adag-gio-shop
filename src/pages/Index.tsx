
import React from 'react';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import PianoCard from '@/components/PianoCard';
import { slides, pianos } from '@/data/pianos';

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Carousel Section */}
        <section>
          <Carousel slides={slides} />
        </section>
        
        {/* Products Grid Section */}
        <section className="mt-10 mx-auto w-full px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pianos.map((piano) => (
              <PianoCard
                key={piano.id}
                id={piano.id}
                image={piano.image}
                name={piano.name}
                model={piano.model}
                price={piano.price}
                rentOption={piano.rentOption}
              />
            ))}
          </div>
        </section>
      </main>
      
      <footer className="py-6 text-center text-gray-500 mt-12 border-t">
        <p>© {new Date().getFullYear()} ADAGGIO - Piano Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
