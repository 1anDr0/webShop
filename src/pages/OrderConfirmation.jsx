
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 bg-lightgrey">
      <h1 className="text-3xl font-bold text-brandturkos mb-4">Tack för din beställning!</h1>
      <p className="text-black mb-8">En bekräftelse har skickats till din e-post. Vi skickar dina varor så snart som möjligt.</p>
      <Link
        to="/"
        className="bg-brandturkos text-white px-6 py-2 rounded-full hover:bg-brandgold hover:text-black"
      >
        Till startsidan
      </Link>
    </div>
  );
};

export default OrderConfirmation;
