import { useState } from "react";
import { NavLink } from "react-router-dom";

const CategoriesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-6 px-4 border-transparent hover:border-b-2 hover:border-black"
      >
        KATEGORIER
      </button>
      {isOpen && (
  <div className="absolute left-1/2 top-full transform -translate-x-1/2 w-[1000px] bg-white shadow-lg border-t border-gray-200 z-50 py-6 px-12">
    <div className="flex justify-between gap-8">
      {/* Kategorier */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase">Kategorier</h3>
        <ul className="space-y-2">
          <li><NavLink to="/category/Belysning" className="hover:underline">Belysning</NavLink></li>
          <li><NavLink to="/category/Underhållning" className="hover:underline">Underhållning</NavLink></li>
          <li><NavLink to="/category/Energi" className="hover:underline">Energi</NavLink></li>
          <li><NavLink to="/category/Säkerhet" className="hover:underline">Säkerhet</NavLink></li>
          <li><NavLink to="/category/Trädgård" className="hover:underline">Trädgård</NavLink></li>
          <li><NavLink to="/category/Uppvärmning" className="hover:underline">Uppvärmning</NavLink></li>
          <li><NavLink to="/category/Hushåll" className="hover:underline">Hushåll</NavLink></li>
          <li><NavLink to="/category/Hälsa" className="hover:underline">Hälsa</NavLink></li>
          <li><NavLink to="/category/Alla Produkter" className="hover:underline">Se alla produkter</NavLink></li>
        </ul>
      </div>

      {/* Populära */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase">Populära</h3>
        <ul className="space-y-2">
          <li><NavLink to="/category/Högtalare" className="hover:underline">Högtalare</NavLink></li>
          <li><NavLink to="/category/Dammsugare" className="hover:underline">Dammsugare</NavLink></li>
          <li><NavLink to="/category/Lampor" className="hover:underline">Lampor</NavLink></li>
          <li><NavLink to="/category/Paket" className="hover:underline">Paketerbjudande</NavLink></li>
        </ul>
      </div>

      {/* Varumärken */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase">Varumärken</h3>
        <ul className="space-y-2">
          <li><NavLink to="/search?q=Sonos" className="hover:underline">Sonos</NavLink></li>
          <li><NavLink to="/search?q=Husqvarna" className="hover:underline">Husqvarna</NavLink></li>
          <li><NavLink to="/search?q=Hue" className="hover:underline">Philips Hue</NavLink></li>
          <li><NavLink to="/search?q=Samsung" className="hover:underline">Samsung</NavLink></li>
          <li><NavLink to="/search?q=Somfy" className="hover:underline">Somfy</NavLink></li>
        </ul>
      </div>
          </div>
        </div>
      )}
    </li>
  );
};


export default CategoriesDropdown;
