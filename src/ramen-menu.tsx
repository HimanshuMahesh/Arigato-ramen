import React from 'react';

const RamenMenu: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <img 
        src="/images/Ramen-menu.jpg" 
        alt="Ramen Menu" 
        className="object-cover w-full h-full" 
      />
    </div>
  );
};

export default RamenMenu;
