import ProductCard from "../comp/ProductCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((product) =>
          product.searchableText.toLowerCase().includes(query.toLowerCase())
        );
        setProducts(filtered);
      });
  }, [query]);

  return (
    
    <div className="min-h-screen py-16">
    {/* Rubrik och beskrivning – på vit bakgrund */}
    <div className="max-w-7xl mx-auto px-6 mb-12">
    <h1 className="text-2xl font-bold mb-8">Sökresultat för: "{query}"</h1>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse voluptatum tempore harum vel, aspernatur quod alias architecto dolore vero provident, quae iste quaerat eius distinctio cupiditate ipsa nostrum assumenda.
      </p>
    </div>

    <div className="bg-[#f6f6f6] py-12 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-6">
        

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Inga produkter hittades för "{query}".</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;

 