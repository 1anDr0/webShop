import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

import { IoMdCheckmark } from "react-icons/io";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Fel vid hämtning av produkt:", err));
  }, [id]);

  if (!product) {
    return <p className="p-10">Laddar produkt...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        {/* Bilden till vänster */}
        <div className="w-full lg:w-1/2">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-[400px] h-auto object-contain" 
          />
        </div>
  
        {/* Texten till höger */}
        <div className="w-full lg:w-1/2">
        <p className="text-lg text-black mb-4">{product.brand}</p>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-black mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">{product.price} kr</p>
          <p className="text-base mb-4">{product.info}</p>
          <p className="text-sm mb-4">{product.more}</p>
          <p className="text-base mb-8 flex items-center gap-2">
          {product.inStock ? (
          <>
          Lagerstatus:
         
         <span className="text-black font-medium">I lager</span>
         <IoMdCheckmark className="text-green-600" />
         </>
         ) : (
         <span className="text-red-600 font-medium">Ej i lager</span>
         )}
          </p>



          

                  <button className="bg-brandturkos text-white px-[200px] py-2 rounded-full hover:bg-brandgold hover:text-white transition"
                  aria-label="Lägg till i varukorg"
                  onClick={(e) => {
                    e.preventDefault(); // Stoppar Link från att triggas
                    addToCart(product); // Lägg till i context
                  }}
                  >Lägg i varukorgen</button>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetail;
