import React, { useRef, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Carousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    
    <div className="py-20">
      <h1 className="text-xl font-bold mb-2 ml-[18%]">Populära produkter</h1>
    <div className="relative px-0 py-6 bg-lightgrey">
      
      <button
        onClick={() => scroll("left")}
        className="absolute z-10 left-20 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2"
      >
        <BiChevronLeft size={30} />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide no-scrollbar gap-4 px-0"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {products.map((product) => (
          <div
          key={product.id}
          style={{ maxWidth: "280px", minWidth: "280px", height: "380px", flex: "0 0 auto" }}
        className="scroll-snap-start"
        >
          <ProductCard product={product} />
        </div>
        
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute z-10 right-20 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2"
      >
        <BiChevronRight size={30} />
      </button>
    </div>
    </div>
  );
};

export default Carousel;

