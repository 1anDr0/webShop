import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();
  

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3001/users?email=${email}`);
      const users = await res.json();
      const user = users[0]; // förutsätter unik e-post
      

      if (!user) {
        toast.error("Ingen användare hittades");
        return;
      }

      if (user.password !== password) {
        toast.error("Fel lösenord");
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));
      login(user);
      toast.success("Välkommen tillbaka");
      navigate("/");
    } catch (err) {
      console.error("Fel vid inloggning:", err);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-lightgrey mt-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-black">Logga in på ditt konto</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">E-post</label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-brandgold"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">Lösenord</label>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-brandgold"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-full bg-brandturkos px-3 py-1.5 text-sm font-semibold text-white hover:bg-brandgold focus:outline-2 focus:outline-brandgold"
            >
              Logga in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Inte medlem?
          <Link to="/RegForm" className="font-semibold text-brandturkos hover:text-brandturkos"> Registrera dig här</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;



