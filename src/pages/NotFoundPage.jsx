import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 bg-lightgrey">
      <h1 className="text-4xl font-bold text-brandturkos mb-4">404 - Sidan finns inte</h1>
      <p className="text-gray-700 mb-8">
        Oops! Sidan du försöker nå finns inte eller har flyttats.
      </p>
      <Link
        to="/"
        className="bg-brandturkos text-white px-6 py-2 rounded-full hover:bg-brandgold hover:text-black text-sm"
      >
        Till startsidan
      </Link>
    </div>
  );
};

export default NotFoundPage;
