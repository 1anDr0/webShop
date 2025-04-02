import { NavLink } from "react-router-dom";
import { BiUser, BiSearch, BiShoppingBag } from "react-icons/bi";

const Navbar = () => {
  return (    
    <nav className="border-b border-gray-300">
    <div className="flex items-center justify-between px-10 py-8">
     
      <div className="flex-shrink-0">
        <h1 className="text-xl font-bold">
          <NavLink to="/" className="hover:opacity-80">TECHFLOW</NavLink>
        </h1>
      </div>

      <ul className="flex gap-8 justify-center text-sm font-medium">
        <li>
          <NavLink
            to="#"
            className="relative py-9 px-4 hover:border-b-2 hover:border-black"
          >
            KATEGORIER
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className="relative py-9 px-4 hover:border-b-2 hover:border-black"
          >
            INSPIRATION
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className="relative py-9 px-4 hover:border-b-2 hover:border-black"
          >
            SMART HUB
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className="relative py-9 px-4 hover:border-b-2 hover:border-black"
          >
            RUM
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className="relative py-9 px-4 hover:border-b-2 hover:border-black"
          >
            APP
          </NavLink>
        </li>
      </ul>


    
      <ul className="flex gap-6 items-center text-xl">
        <li><BiSearch className="cursor-pointer hover:opacity-70" /></li>
        <li><BiUser className="cursor-pointer hover:opacity-70" /></li>
        <li><BiShoppingBag className="cursor-pointer hover:opacity-70" /></li>
      </ul>

      
    </div>
    </nav>
  )
}

export default Navbar
