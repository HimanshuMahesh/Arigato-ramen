import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-background py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <img 
          src="./images/2.png" 
          alt="Arigato Ramen Logo" 
          className="h-12 mb-4 sm:mb-0"
        />
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 font-montserrat">
          <a href="#hero" className="hover:text-secondary transition-colors">Home</a>
          <a href="#about" className="hover:text-secondary transition-colors">About</a>
          <a href="#bowls" className="hover:text-secondary transition-colors">Bowls</a>
          <a href="#footer" className="hover:text-secondary transition-colors">Contact</a>
        </nav>
        <a 
          href="https://github.com/HimanshuMahesh" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center bg-black text-white px-6 py-2 font-montserrat mt-4 sm:mt-0 rounded hover:bg-gray-800 transition-colors"
        >
          My Github
        </a>
      </div>
    </header>
  );
};

export default Header;
