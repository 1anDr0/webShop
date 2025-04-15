import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RegForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      email,
      password,
      address,
      zipCode,
      city,
    };

    fetch("http://localhost:3001/users", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        login(data);
        navigate("/");
      })
      .catch(err => console.error("Fel vid registrering:", err));
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-lightgrey mt-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-black">Bli medlem</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Förnamn */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-black">Förnamn</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="given-name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-brandgold"
            />
          </div>

          {/* Efternamn */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-black">Efternamn</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="family-name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-brandgold"
            />
          </div>

          

          {/* Adress */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-black">Adress</label>
            <input
              type="text"
              name="address"
              id="address"
              autoComplete="street-address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-brandgold"
            />
          </div>

          {/* Postnummer */}
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-black">Postnummer</label>
            <input
              type="text"
              name="zipCode"
              id="zipCode"
              autoComplete="postal-code"
              required
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-brandgold"
            />
          </div>

          {/* Stad */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-black">Stad</label>
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-brandgold"
            />
          </div>

          {/* E-post */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">E-post</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-brandgold"
            />
          </div>

          {/* Lösenord */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">Lösenord</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-brandgold"
            />
          </div>

          {/* Skicka-knapp */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-full bg-brandturkos px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-brandgold hover:text-black"
            >
              Bli medlem nu
            </button>
          </div>

          
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Redan medlem?
          <Link to="/Login" className="font-semibold text-brandturkos hover:underline ml-1">Logga in här</Link>
        </p>
      </div>
    </div>
  );
};

export default RegForm;
