import React from 'react';
import { Button } from './components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">ATG&Co</div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/"><Button variant="ghost">Home</Button></Link>
            <Link to="/services"><Button variant="ghost">Services</Button></Link>
            <Link to="/about"><Button variant="ghost">About</Button></Link>
            <Link to="/team"><Button variant="ghost">Team</Button></Link>
            <Link to="/contact"><Button variant="ghost">Contact</Button></Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link to="/" className="block"><Button variant="ghost" className="w-full justify-start">Home</Button></Link>
            <Link to="/services" className="block"><Button variant="ghost" className="w-full justify-start">Services</Button></Link>
            <Link to="/about" className="block"><Button variant="ghost" className="w-full justify-start">About</Button></Link>
            <Link to="/team" className="block"><Button variant="ghost" className="w-full justify-start">Team</Button></Link>
            <Link to="/contact" className="block"><Button variant="ghost" className="w-full justify-start">Contact</Button></Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;