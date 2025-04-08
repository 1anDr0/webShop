import ProductCard from "../comp/ProductCard";

import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"



const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");


  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
    .then((res) => res.json())
        .then((data) => {
const filtered = data.filter((product) =>
  product.searchableText.toLowerCase().includes(query.toLowerCase())
);  
setProducts(filtered);
        })
   }, [query]);
  




   return (
    <div>
      <h1>Sökresultat för: "{query}"</h1>

      {products.length > 0 ? (
        // Loopa och visa produkter
        products.map((product) => (
          
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>Inga produkter hittades för "{query}"</p>
      )}
    </div>
  );
};

export default SearchResultsPage
 