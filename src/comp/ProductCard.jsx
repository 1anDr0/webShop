import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white w-full h-[380px] rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition">

      {/* Bilden klickbar */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[200px] object-contain mb-6 mt-4 p-4"
        />
      </Link>

      <div className="text-xs uppercase tracking-wide font-semibold text-gray-500">
        {product.brand}
      </div>
      <div className="font-semibold text-sm mt-1 leading-snug">{product.title}</div>

      {/* Pris + ikonrad */}
      <div className="flex justify-between items-center mt-2">
        <div className="text-md font-bold">
          {product.price.toLocaleString()} kr
        </div>
        <button
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Lägg till i varukorg"
        >
          <BiShoppingBag size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
