import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useAuth } from "../context/AuthContext";

const RegForm = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newUser = {
      firstName,
      lastName,
      email,
      password
    };

    fetch("http://localhost:3001/users", { 
       method: 'POST',
       headers: {'Content-Type':'application/json'}, //skickar json till servern
       body: JSON.stringify(newUser)
      }) 
      .then(res => res.json()) // 🔁 Hämta JSON från svaret
      .then(data => {
        login(data);           // ✅ Logga in användaren direkt
        navigate("/");         // 🚀 Gå till startsidan
        console.log('ny user:', data);
      })
      .catch(err => console.error("Fel vid registrering:", err));
  }


  return (
    
    <div onSubmit={handleSubmit}>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-lightgrey mt-10">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    
    <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-black">Bli medlem</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
    <div>
        <label htmlFor="firstname" className="block text-sm/6 font-medium text-black">Förnamn</label>
        <div className="mt-2">
          <input type="firstname" name="firstname" id="firstname" autoComplete="firstname" required value={firstName} onChange={(e) => setFirstName(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brandgold sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <label htmlFor="lastname" className="block text-sm/6 font-medium text-black">Efternamn</label>
        <div className="mt-2">
          <input type="lastname" name="lastname" id="lastname" autoComplete="lastname" required value={lastName} onChange={(e) => setLastName(e.target.value)}  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brandgold sm:text-sm/6"/>
        </div>
      </div>
      

      <div>
        <label htmlFor="email" className="block text-sm/6 font-medium text-black">E-post</label>
        <div className="mt-2">
          <input type="email" name="email" id="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)}  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brandgold sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Lösenord</label>
          
        </div>
        <div className="mt-2">
          <input type="password" name="password" id="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brandgold sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-full bg-brandturkos px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-brandgold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">Bli medlem nu</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm/6 text-gray-500">
      Redan medlem?
      <Link to={"/Login"} className="font-semibold text-brandturkos hover:text-brandturkos">Logga in här</Link>
    </p>
  </div>
</div>
</div>
  )
}

export default RegForm
