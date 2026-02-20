import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-24 text-center'>
      <h1 className='text-4xl font-bold mb-4'>Order Placed 🎉</h1>

      <p className='text-gray-600 mb-6'>
        Thank you for shopping with us. Your order has been successfully placed.
      </p>
      <p className='text-gray-500 mb-6'>
        You’ll receive an order confirmation email shortly.
      </p>

      <Link
        to='/'
        className='inline-block bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition'
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default Success;
