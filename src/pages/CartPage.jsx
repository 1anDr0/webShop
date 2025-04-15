import { Link, useNavigate } from "react-router-dom"

import toast from "react-hot-toast";

import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext";

import { useEffect, useState } from "react";


const CartPage = ({ isCheckout }) => {
   const { cartItems, removeFromCart, clearCart } = useCart();
   const { user } = useAuth();
   const navigate = useNavigate();

   const total = cartItems.reduce((sum, item) => sum + item.price, 0);

     const [firstName, setFirstName] = useState('');
     const [lastName, setLastName] = useState('');
     const [email, setEmail] = useState('');
     const [address, setAddress] = useState('');
     const [zipCode, setZipCode] = useState('');
     const [city, setCity] = useState('');

      
        
     useEffect(() => {
     if (user) {
      setFirstName(user.firstName || "");
       setLastName(user.lastName || "");
    setEmail(user.email || "");
    setAddress(user.address || "");
    setCity(user.city || "");
    setZipCode(user.zipCode || "");
    }
    }, [user]);

   const handleSubmitOrder = async (e) => {
    
    e.preventDefault();

    const order = {
      user: {
        firstName,
        lastName,
        email,
        address,
        zipCode,
        city
      },
      items: cartItems,
      total: total,
      date: new Date().toISOString()
    };

    try {
      const res = await fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
      });
  
      if (res.ok) {
        toast.success("Tack! Din beställning är bekräftad.");
          navigate("/order-confirmation");
          clearCart();
        
      } else {
        toast.error("Något gick fel vid beställningen.");
      }
    } catch (err) {
      console.error("Fel vid beställning:", err);
    }
  };



   return (
    <div className="bg-lightgrey">
    <div className="max-w-7xl mx-auto px-6 py-12 ">
      <h1 className="text-3xl font-bold mb-8">Din varukorg</h1>

      {/* Om varukorgen är tom */}
      {cartItems.length === 0 ? (
        <p className="text-black mb-20">Du har inga produkter i varukorgen.</p>
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

          {isCheckout ? (
              <>
              <div>
              <h1 className="text-lg font-bold mt-20 mb-10">Fyll i dina uppgifter:</h1>

              <form onSubmit={handleSubmitOrder} className="grid gap-4 mb-10 mt-4">
              
              <label htmlFor="firstname" className="block text-sm/6 font-medium text-black">Förnamn</label>
              <input type="text"  name="firstname" id="firstname" autoComplete="postal-code" required value={firstName} onChange={(e) => setFirstName(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brandgold sm:text-sm/6"/>

              <label htmlFor="lastname" className="block text-sm/6 font-medium text-black">Efternamn</label>
              <input type="text" name="lastname" id="lastname" autoComplete="family-name" required value={lastName} onChange={(e) => setLastName(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brandgold sm:text-sm/6"/>
              
              
               <label htmlFor="email" className="block text-sm/6 font-medium text-black">Adress</label>
              <input type="text" name="address" id="address" autoComplete="street-address" required value={address} onChange={(e) => setAddress(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brandgold sm:text-sm/6"/>

              <label htmlFor="zip" className="block text-sm/6 font-medium text-black">Postnummer</label>
              <input type="text" name="zipcode" id="zipcode" autoComplete="postal-code" required value={zipCode} onChange={(e) => setZipCode(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brandgold sm:text-sm/6"/>

              <label htmlFor="city" className="block text-sm/6 font-medium text-black">Ort/Stad</label>
              <input type="text" name="city" id="city" autoComplete="address-level2" required value={city} onChange={(e) => setCity(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brandgold sm:text-sm/6"/>

              <label htmlFor="email" className="block text-sm/6 font-medium text-black">E-post</label>
               <input type="email"  name="email" id="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brandgold sm:text-sm/6"/>

              <div className="mt-6 border-t pt-6 flex justify-between items-center">
              <div className="text-xl font-bold">Totalt: {total.toLocaleString()} kr</div>
              <button
              type="submit" 
              className="bg-brandturkos text-white px-6 py-2 rounded-full hover:bg-brandgold hover:text-black text-sm"
              >Bekräfta beställning
              </button>
             </div>
            </form>
            
        
              </div>
  

              </>
            ) : (
              <div>
                 {/* Totalsumma & knappar */}
          <div className="mt-20 border-t pt-6 flex justify-between items-center">
            <div className="text-xl font-bold">Totalt: {total.toLocaleString()} kr</div>
              <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="text-sm text-gray-600 hover:underline"
              >
                Töm varukorg
              </button>
              <Link
                to="/Checkout"
                className="bg-brandturkos text-white px-6 py-2 rounded-full hover:bg-brandgold hover:text-black text-sm"
              >
                Till kassan
              </Link>
            </div> 
            </div>
            </div>
            )}
            
           
          
        </>
      )}
    </div>
    </div>
  );
};



export default CartPage
