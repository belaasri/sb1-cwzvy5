import React from 'react';
import { Instagram } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <Instagram className="text-white mr-2" size={32} />
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Story<span className="text-purple-300">Saver</span>
          </h1>
        </div>
        <p className="text-center text-white/80 mt-2">
          Download Instagram Stories, Highlights and Videos Easily
        </p>
      </div>
    </header>
  );
};

export default Header;