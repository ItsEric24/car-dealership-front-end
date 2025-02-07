import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-cream fixed w-full top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <a href="/" className="font-cormorant text-3xl text-charcoal">
              LUXURYCARS
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            {['Home', 'Inventory', 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-charcoal text-sm tracking-widest hover:text-stone transition-colors duration-300 uppercase"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-charcoal hover:text-stone transition-colors duration-300"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-stone/20">
            {['Home', 'Inventory', 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="block py-4 text-charcoal text-sm tracking-widest hover:text-stone transition-colors duration-300 uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;