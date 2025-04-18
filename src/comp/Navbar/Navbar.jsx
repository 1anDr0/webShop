import CategoriesDropdown from './CategoriesDropdown';
import SearchInput from './SearchInput';

import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

import { BiUser, BiShoppingBag } from "react-icons/bi";
import toast from 'react-hot-toast';

import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";




const Navbar = () => {
   
  const { cartItems } = useCart();
  const cartCount = cartItems.length;

  const { isLoggedIn, logout } = useAuth();


  return (
    <nav className="flex justify-between items-center px-12 border-b mb-1">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">TECHFLOW</Link>
      </div>

      <ul className="flex flex-1 justify-center gap-2 items-center ">
        <CategoriesDropdown />
        <li className='py-6 px-4 border-b-2 border-transparent hover:border-b-2 hover:border-black'><NavLink to="#">INSPIRATION</NavLink></li>
        <li className='py-6 px-4 border-b-2 border-transparent hover:border-b-2 hover:border-black'><NavLink to="#">SMART HUB</NavLink></li>
        <li className='py-6 px-4 border-b-2 border-transparent hover:border-b-2 hover:border-black'><NavLink to="#">RUM</NavLink></li>
        <li className='py-6 px-4 border-b-2 border-transparent hover:border-b-2 hover:border-black'><NavLink to="#">APP</NavLink></li>
      </ul>

      <ul className="flex-1 flex justify-end gap-6 text-xl">
        <SearchInput />
        
        
        {isLoggedIn ? (
  <li className="relative">
    <button className="text-2xl hover:opacity-70 text-brandgold"
      onClick={() => {
        logout();
        toast.success("Du är nu utloggad!");
      }}
      
    > <BiUser />
    </button>
     </li>

   ) : (

  <li className="relative">
    <Link to="/login" className="text-2xl hover:opacity-70 text-black">
      <BiUser />
    </Link>
  </li>
   )}

        <li className="relative">
         <Link to="/cart">
        <BiShoppingBag className="text-2xl hover:opacity-70" />
           {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-brandgold text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
           {cartCount}
         </span>
          )}
          </Link>
           </li>

      </ul>
    </nav>
  );
};

export default Navbar;
