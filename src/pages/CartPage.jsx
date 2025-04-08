import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"


const CartPage = () => {
   const { cartItems, removeFromCart, clearCart } = useCart();

   const total = cartItems.reduce((sum, item) => sum + item.price, 0);



   return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Din varukorg</h1>

      {/* Om varukorgen är tom */}
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Du har inga produkter i varukorgen.</p>
      ) : (
        <>
          {/* Produktlista */}
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain"
                  />
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-500">{item.price.toLocaleString()} kr</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Ta bort
                </button>
              </div>
            ))}
          </div>

          {/* Totalsumma & knappar */}
          <div className="mt-10 border-t pt-6 flex justify-between items-center">
            <div className="text-xl font-bold">Totalt: {total.toLocaleString()} kr</div>
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="text-sm text-gray-600 hover:underline"
              >
                Töm varukorg
              </button>
              <Link
                to="/checkout"
                className="bg-black text-white px-4 py-2 rounded hover:opacity-90 text-sm"
              >
                Till kassan
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};



export default CartPage
