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
    <div>
    <div className="min-h-screen py-16">

  <div className="max-w-7xl mx-auto px-6 mb-12">
    <h1 className="text-2xl font-bold mb-4">{category}</h1>
    <p className="text-black">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse voluptatum tempore harum vel, aspernatur quod alias architecto dolore vero provident, quae iste quaerat eius distinctio cupiditate ipsa nostrum assumenda.
    </p>
  </div>

  <div className="bg-lightgrey w-full py-12">
    <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {filtered.map((product) => (
     <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  </div>
</div>
<div className="max-w-7xl mx-auto px-6 mb-12">
    <h1 className="text-2xl font-bold mb-4">{category}</h1>
    <p className="text-black mb-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse voluptatum tempore harum vel, aspernatur quod alias architecto dolore vero provident, quae iste quaerat eius distinctio cupiditate ipsa nostrum assumenda.
    </p>
    <p className="text-black">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse voluptatum tempore harum vel, aspernatur quod alias architecto dolore vero provident, quae iste quaerat eius distinctio cupiditate ipsa nostrum assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. A culpa quo ipsam eos fuga soluta est, eligendi ad? Autem praesentium iure temporibus deserunt facilis delectus eos accusantium, obcaecati at debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque voluptate ea ipsam inventore voluptatibus commodi porro harum natus? Quod minus porro nemo doloribus expedita ratione dicta architecto illo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio officia quis corporis similique. Illo hic impedit aliquid ducimus commodi et molestias, harum architecto cum doloribus. Est veniam perspiciatis rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eos amet voluptate numquam tenetur sed, veniam ratione consectetur beatae, soluta id quo sit quas corrupti laborum odio est harum vitae?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, unde eos ea quis, tempora vel voluptas soluta quae blanditiis quasi rem totam aut, corporis accusamus a voluptatem libero molestiae porro.
    </p>
  </div>
</div>
  );
};

export default CategoryPage;