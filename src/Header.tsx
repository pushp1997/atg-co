import React from 'react';
import { Button } from './components/ui/button';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
    <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">ATG&Co</div>
        <div className="space-x-4">
            <Link to="/"><Button variant="ghost">Home</Button></Link>
            <Link to="/services"><Button variant="ghost">Services</Button></Link>
            <Link to="/about"><Button variant="ghost">About</Button></Link>
            <Link to="/team"><Button variant="ghost">Team</Button></Link>
            <Button variant="ghost">Contact</Button>
        </div>
        </nav>
    </header>
);

export default Header;