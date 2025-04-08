import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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
    <div className="max-w-4xl mx-auto px-10 py-20">
      <img src={product.image} alt={product.title} className="w-full h-96 object-cover mb-6" />
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-lg text-gray-600 mb-4">{product.description}</p>
      <p className="text-base mb-4">{product.info}</p>
      <p className="text-xl font-semibold">{product.price} kr</p>
    </div>
  );
};

export default ProductDetail;
