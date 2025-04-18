import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

import { IoMdCheckmark } from "react-icons/io";
import { BsAlexa } from "react-icons/bs";
import { AiOutlineApple } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";

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
    <div>
    <div className="max-w-7xl mx-auto px-6 py-20">
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
          }} >Lägg i varukorgen</button>
        </div>
        
        
      </div>
     
    </div>
    <div className="bg-lightgrey py-10 mt-20 mb-20">
    <div className="max-w-4xl mx-auto flex justify-between items-center text-center px-10">
       
        <div>
          <BsAlexa className="text-4xl mx-auto" />
          <h4 className="text-brandlightturkos text-sm font-medium">Works with</h4>
          <h1 className="text-black text-base font-semibold">Amazon Alexa</h1>
        </div>

       
        <div>
          <AiOutlineApple className="text-4xl mx-auto" />
          <h4 className="text-brandlightturkos text-sm font-medium">Works with</h4>
          <h1 className="text-black text-base font-semibold">Apple Home</h1>
        </div>

      
        <div>
          <FaGoogle className="text-4xl mx-auto" />
          <h4 className="text-brandlightturkos text-sm font-medium">Works with</h4>
          <h1 className="text-black text-base font-semibold">Hey Google</h1>
        </div>
      </div>
    </div>

     <h1 className="text-center text-4xl mb-10 mt-20 font-bold">Tekniska specifikationer</h1>
    <div className="max-w-7xl mx-auto items-center text-center mb-20">
      
      <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusantium impedit perspiciatis consequatur officia quia aperiam alias deserunt dolorum. Quis facilis quo dicta laborum quos magnam eveniet cupiditate tempore doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laborum explicabo, ex sapiente nihil officiis molestiae soluta, dolore maiores autem corporis adipisci, eum laboriosam quia odio! Debitis praesentium commodi quos.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, fugiat vitae quia, nisi deleniti excepturi officia earum repellat neque ipsa eum ut cumque necessitatibus dolor itaque magni amet fuga distinctio. Lorem ipsum <span className="font-bold">för i helvete</span> dolor sit amet consectetur adipisicing elit. Fugiat eum esse omnis cupiditate ratione voluptatibus dolore reprehenderit rem sed nesciunt veniam asperiores labore, aspernatur soluta. Soluta officiis recusandae quibusdam fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta expedita aperiam iste eum commodi. Tenetur reprehenderit, unde cum veniam ut temporibus facilis similique repellat id quos excepturi amet nisi ipsam.</p>
    </div>
    </div>
  );
};

export default ProductDetail;
