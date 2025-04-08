import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ProductCard from "../comp/ProductCard";


const CategoryPage = () => {
   const { category } = useParams();
   const [filtered, setFiltered] = useState([]);

   useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`http://localhost:3001/products?category=${category}`)
      const data = await res.json();

      const match = data.filter(product =>
        Array.isArray(product.category)
        ? product.category.includes(category)
        : product.category === category
      );
      setFiltered(match);
    }
    fetchProducts();
   }, [category]);



   return (
    <div className="min-h-screen py-16">
  {/* Rubrik och beskrivning – på vit bakgrund */}
  <div className="max-w-7xl mx-auto px-6 mb-12">
    <h1 className="text-2xl font-bold mb-4">{category}</h1>
    <p className="text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse voluptatum tempore harum vel, aspernatur quod alias architecto dolore vero provident, quae iste quaerat eius distinctio cupiditate ipsa nostrum assumenda.
    </p>
  </div>

  {/* KORT – egen ljusgrå bakgrund som täcker hela sidan horisontellt */}
  <div className="bg-[#f6f6f6] w-full py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </div>
</div>
  );
};

export default CategoryPage;