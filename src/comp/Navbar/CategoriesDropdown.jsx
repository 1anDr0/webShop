import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const CategoriesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-6 px-4 border-transparent hover:border-b-2 hover:border-black"
      >
        KATEGORIER
      </button>
      
      {isOpen && (
  <div className="absolute left-1/2 top-full transform -translate-x-1/2 w-[1200px] bg-white shadow-lg border-t border-lightgrey z-50 py-6 px-12">
    <div className="flex justify-between gap-8">
      {/* Kategorier */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase">Kategorier</h3>
        <ul className="space-y-2">
          <li><NavLink to="/category/Belysning" className="hover:underline" onClick={() => setIsOpen(false)}>Belysning</NavLink></li>
          <li><NavLink to="/category/Underhållning" className="hover:underline" onClick={() => setIsOpen(false)}>Underhållning</NavLink></li>
          <li><NavLink to="/category/Energi" className="hover:underline" onClick={() => setIsOpen(false)}>Energi</NavLink></li>
          <li><NavLink to="/category/Säkerhet" className="hover:underline" onClick={() => setIsOpen(false)}>Säkerhet</NavLink></li>
          <li><NavLink to="/category/Trädgård" className="hover:underline" onClick={() => setIsOpen(false)}>Trädgård</NavLink></li>
          <li><NavLink to="/category/Uppvärmning" className="hover:underline" onClick={() => setIsOpen(false)}>Uppvärmning</NavLink></li>
          <li><NavLink to="/category/Hushåll" className="hover:underline" onClick={() => setIsOpen(false)}>Hushåll</NavLink></li>
          <li><NavLink to="/category/Hälsa" className="hover:underline" onClick={() => setIsOpen(false)}>Hälsa</NavLink></li>
          <li><NavLink to="/category/Alla Produkter" className="hover:underline" onClick={() => setIsOpen(false)}>Se alla produkter</NavLink></li>
        </ul>
      </div>

      {/* Populära */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase">Populära</h3>
        <ul className="space-y-2">
          <li><NavLink to="/category/Högtalare" className="hover:underline" onClick={() => setIsOpen(false)}>Högtalare</NavLink></li>
          <li><NavLink to="/category/Dammsugare" className="hover:underline" onClick={() => setIsOpen(false)}>Dammsugare</NavLink></li>
          <li><NavLink to="/category/Lampor" className="hover:underline" onClick={() => setIsOpen(false)}>Lampor</NavLink></li>
          <li><NavLink to="/category/Paket" className="hover:underline"onClick={() => setIsOpen(false)}>Paketerbjudande</NavLink></li>
        </ul>
      </div>

      {/* Varumärken */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase">Varumärken</h3>
        <ul className="space-y-2">
          <li><NavLink to="/search?q=Sonos" className="hover:underline" onClick={() => setIsOpen(false)}>Sonos</NavLink></li>
          <li><NavLink to="/search?q=Husqvarna" className="hover:underline" onClick={() => setIsOpen(false)}>Husqvarna</NavLink></li>
          <li><NavLink to="/search?q=Hue" className="hover:underline" onClick={() => setIsOpen(false)}>Philips Hue</NavLink></li>
          <li><NavLink to="/search?q=Samsung" className="hover:underline" onClick={() => setIsOpen(false)}>Samsung</NavLink></li>
          <li><NavLink to="/search?q=Somfy" className="hover:underline" onClick={() => setIsOpen(false)}>Somfy</NavLink></li>
        </ul>
      </div>
          </div>
        </div>
      )}
    </li>
  );
};


export default CategoriesDropdown;
