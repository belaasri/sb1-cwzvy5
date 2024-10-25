import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 mt-8">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-white/80">
          © {new Date().getFullYear()} StorySaver. Use responsibly and respect Instagram's terms of service.
        </p>
      </div>
    </footer>
  );
};

export default Footer;