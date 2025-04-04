import CategoriesDropdown from './CategoriesDropdown';
import SearchInput from './SearchInput';
import { BiUser, BiShoppingBag } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-0 border-b mb-1">
      <div className="flex-1">
        <NavLink to="/" className="text-xl font-bold">TECHFLOW</NavLink>
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
        <li><BiUser /></li>
        <li><BiShoppingBag /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
