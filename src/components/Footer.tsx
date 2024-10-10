import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-primary text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-6 sm:mb-0">
            <h3 className="text-2xl font-bold mb-2 font-playfair">Arigato Ramen</h3>
            <p className="font-lato">a react webdev project </p>
          </div>
          <div className="text-center sm:text-right font-lato">
            <p className="mb-2">Visit us at JP Nagar, Bangalore</p>
            <p>Your go-to spot for authentic Japanese ramen</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-background text-center font-lato">
          <p>&copy; {new Date().getFullYear()} Arigato Ramen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;