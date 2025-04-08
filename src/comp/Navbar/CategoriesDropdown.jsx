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
        <div className="absolute left-0 top-full w-screen bg-white shadow-lg border-t border-gray-200 z-50 py-6 px-10">
          <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Vänstersida */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase">Passande rubrik</h3>
              <ul className="space-y-2">
                <li><NavLink to="/category/Belysning" className="hover:underline">Belysning</NavLink></li>
                <li><NavLink to="/category/Underhållning" className="hover:underline">Underhållning</NavLink></li>
                <li><NavLink to="/category/Energi" className="hover:underline">Energi</NavLink></li>
                <li><NavLink to="/category/säkerhet" className="hover:underline">Säkerhet</NavLink></li>
                <li><NavLink to="/category/trädgård" className="hover:underline">Trädgård</NavLink></li>
                <li><NavLink to="/category/uppvärmning" className="hover:underline">Uppvärmning</NavLink></li>
                <li><NavLink to="/category/hushåll" className="hover:underline">Hushåll</NavLink></li>
                <li><NavLink to="/category/hälsa" className="hover:underline">Hälsa</NavLink></li> 
                <li><NavLink to="/category/Högtalare" className="hover:underline">Högtalare</NavLink></li>
                <li><NavLink to="/category/Paket" className="hover:underline">Paketerbjudande</NavLink></li>
                <li><NavLink to="/products" className="hover:underline">Se all produkter</NavLink></li>
              </ul>
            </div>

            {/* Högersida */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase">Varumärken</h3>
              <ul className="space-y-2">
                <li><NavLink to="/brand/sonos" className="hover:underline">Sonos</NavLink></li>
                <li><NavLink to="/brand/husqvarna" className="hover:underline">Husqvarna</NavLink></li>
                <li><NavLink to="/brand/philips-hue" className="hover:underline">Philips Hue</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};


export default CategoriesDropdown;
