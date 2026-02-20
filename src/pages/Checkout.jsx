import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const [paymentMethod, setPaymentMethod] = useState('cod');

  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    setIsPlacingOrder(true);

    setTimeout(() => {
      clearCart();
      navigate('/success');
    }, 2000);
  };

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <div className='flex flex-col lg:flex-row gap-6'>
        {/* Address + Payment */}
        <div className='lg:w-2/3 flex flex-col gap-6'>
          {/* Address Section */}
          <div className='bg-white rounded-xl p-5 shadow'>
            <h2 className='text-2xl font-semibold mb-4'>Delivery Address</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <input
                type='text'
                placeholder='Full Name'
                className='border rounded-lg px-4 py-2'
              />
              <input
                type='text'
                placeholder='Phone Number'
                className='border rounded-lg px-4 py-2'
              />
              <input
                type='text'
                placeholder='City'
                className='border rounded-lg px-4 py-2'
              />
              <input
                type='text'
                placeholder='District'
                className='border rounded-lg px-4 py-2'
              />
              <input
                type='text'
                placeholder='State'
                className='border rounded-lg px-4 py-2'
              />
              <input
                type='text'
                placeholder='Pincode'
                className='border rounded-lg px-4 py-2'
              />
              <input
                type='text'
                placeholder='Landmark (optional)'
                className='border rounded-lg px-4 py-2 sm:col-span-2'
              />
            </div>
          </div>

          {/* Payment Section */}
          <div className='bg-white rounded-xl p-5 shadow'>
            <h2 className='text-2xl font-semibold mb-4'>Payment Method</h2>

            <div className='space-y-4'>
              {/* COD */}
              <label className='flex items-center gap-3 border rounded-xl p-4 cursor-pointer'>
                <input
                  type='radio'
                  name='payment'
                  value='cod'
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                />
                <span className='font-medium'>Cash on Delivery</span>
              </label>

              {/* UPI */}
              <label className='flex items-center gap-3 border rounded-xl p-4 cursor-pointer'>
                <input
                  type='radio'
                  name='payment'
                  value='upi'
                  checked={paymentMethod === 'upi'}
                  onChange={() => setPaymentMethod('upi')}
                />
                <span className='font-medium'>UPI (GPay, PhonePe, Paytm)</span>
              </label>

              {/* Card */}
              <label className='flex items-center gap-3 border rounded-xl p-4 cursor-pointer'>
                <input
                  type='radio'
                  name='payment'
                  value='card'
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                />
                <span className='font-medium'>Credit / Debit Card</span>
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className='lg:w-1/3 bg-white rounded-xl p-5 shadow h-fit'>
          <h2 className='text-2xl font-semibold mb-4'>Order Summary</h2>

          <div className='space-y-3 text-lg'>
            <div className='flex justify-between'>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className='flex justify-between text-gray-500'>
              <span>Discount</span>
              <span>$0.00</span>
            </div>

            <div className='flex justify-between font-semibold border-t pt-3'>
              <span>Estimated Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={isPlacingOrder}
            className={`w-full mt-6 py-3 rounded-xl overflow-hidden transition-all duration-500 ease-in-out shadow-md text-white ${
              isPlacingOrder
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-black cursor-pointer hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0'
            }`}
          >
            {isPlacingOrder ? (
              <span className='flex items-center justify-center gap-2'>
                <span className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin' />
                Placing order...
              </span>
            ) : (
              'Place Order'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
