import { Moon, Sun, HeartPulse, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const linkClass = (path: string) => `transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${isActive(path) ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-800 dark:text-gray-200'}`;

  return (
    <nav className="bg-white dark:bg-black shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-blue-600 dark:text-blue-500">
          <HeartPulse size={28} />
          <span className="text-xl font-bold text-black dark:text-white">CardioAI</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/about" className={linkClass('/about')}>About Us</Link>
          <Link to="/dashboard" className={linkClass('/dashboard')}>Dashboard</Link>
          
          <div className="flex items-center pl-4 border-l border-gray-300 dark:border-gray-700">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/login" className="ml-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors">
              Sign In
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleTheme} className="p-2 mr-2 text-black dark:text-white">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-black dark:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 px-4 py-4 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)} className={`block ${linkClass('/')}`}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={`block ${linkClass('/about')}`}>About Us</Link>
          <Link to="/dashboard" onClick={() => setIsOpen(false)} className={`block ${linkClass('/dashboard')}`}>Dashboard</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="block text-blue-600 font-semibold">Sign In</Link>
        </div>
      )}
    </nav>
  );
}
