import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-sm p-4 shadow-lg shadow-black/30 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold hover:text-gray-300 transition-colors">
          My App
        </h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link 
              to="/dashboard" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm uppercase tracking-wider"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/expenses" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm uppercase tracking-wider"
            >
              Expenses
            </Link>
          </li>
          <li>
            <Link 
              to="/subscriptions" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm uppercase tracking-wider"
            >
              Subscriptions
            </Link>
          </li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-1 rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black/95 backdrop-blur-sm text-white p-4 space-y-3">
          <li>
            <Link 
              to="/dashboard" 
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/expenses" 
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Expenses
            </Link>
          </li>
          <li>
            <Link 
              to="/subscriptions" 
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Subscriptions
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;