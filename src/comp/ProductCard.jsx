import { BiShoppingBag } from "react-icons/bi";
import { SiSonos, SiSamsung, SiPhilipshue, SiHusqvarna } from "react-icons/si";

import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";


const ProductCard = ({ product }) => {

  const { addToCart } = useCart();

  const getBrandIcon = (brand) => {
    switch (brand.toLowerCase()) {
      case "sonos":
        return <SiSonos className="text-4xl text-black" />;
      case "husqvarna":
        return <SiHusqvarna className="text-2xl text-black"/>
        case "philips hue":
        return <SiPhilipshue className="text-2xl text-black"/>
        case "samsung":
        return <SiSamsung className="text-4xl text-black"/>
      
      default:
        return <span className="text-sm text-gray-500">{brand}</span>;
    }
  };

  return (
    <div className="bg-white w-full h-[380px] rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition">

      {/* Bilden klickbar */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[200px] object-contain mb-8 mt-4 p-4"
        />
      </Link>
       
      <div className="text-xs uppercase tracking-wide font-semibold text-gray-500 flex items-center gap-2">
      {getBrandIcon(product.brand)}
      </div>
       
     
      <div className="font-semibold text-sm mt-1 leading-snug">{product.title}</div>

      {/* Pris + ikonrad */}
      <div className="flex justify-between items-center mt-2">
        <div className="text-md font-bold">
          {product.price.toLocaleString()} kr
        </div>
        <button
          className="p-2 rounded-full hover:text-brandgold transition"
          aria-label="Lägg till i varukorg"
          onClick={(e) => {
            e.preventDefault(); // Stoppar Link från att triggas
            addToCart(product); // Lägg till i context
          }}
          >
          <BiShoppingBag size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
