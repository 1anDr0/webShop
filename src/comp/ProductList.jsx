import { useEffect, useState } from "react";
import ProductCard from "../comp/ProductCard";


const ProductList = () => {

  const [products, setProducts] = useState([]);

 useEffect(() => {
  fetch('http://localhost:3001/products')
  .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fel vid hämtning:", err));
 }, [])



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-20 py-10">
      {products.map(product => (
        
          <ProductCard key={product.id} product={product} />
        
        
      ))}
    </div>
  );
};

export default ProductList
