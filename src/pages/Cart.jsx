import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className='max-w-7xl mx-auto px-4 py-20 text-center'>
        <h2 className='text-3xl font-semibold mb-4'>Your cart is empty 🛒</h2>

        <p className='text-gray-500 mb-6'>
          Looks like you haven’t added anything yet.
        </p>

        <a
          href='/'
          className='inline-block bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition'
        >
          Start Shopping
        </a>
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-6'>
      <div className='flex flex-col-reverse lg:flex-row gap-6'>
        {/* Shopping Cart */}
        <div className='lg:w-2/3 bg-white rounded-xl p-4 shadow'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-2xl font-semibold'>Your Shopping Cart</h2>
            <span className='text-gray-500'>{cartItems.length} Items</span>
          </div>

          {/* Header Row */}
          <div className='hidden sm:grid grid-cols-4 text-gray-500 text-sm border-b pb-2 mb-3'>
            <span>Product</span>
            <span className='text-center'>Price</span>
            <span className='text-center'>Quantity</span>
            <span className='text-right'>Total</span>
          </div>

          {/* Scrollable Items */}
          <div className='max-h-[60vh] overflow-y-auto pr-2 space-y-4'>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className='grid grid-cols-1 sm:grid-cols-4 items-center gap-3 border-b pb-4'
              >
                {/* Product Info */}
                <div className='flex gap-3 items-center'>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className='w-16 h-16 object-cover rounded'
                  />
                  <div>
                    <p
                      className='font-medium overflow-hidden'
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {item.title}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className='text-red-500 text-sm flex items-center gap-1 cursor-pointer'
                    >
                      <FontAwesomeIcon icon={faTrash} />
                      Remove
                    </button>
                  </div>
                </div>

                {/* Price */}
                <p className='sm:text-center'>
                  <span className='text-gray-400 text-sm sm:hidden'>
                    Price:
                  </span>
                  ${item.price}
                </p>

                {/* Quantity Controls */}
                <div className='flex sm:justify-center items-center'>
                  <span className='text-gray-400 text-sm sm:hidden'>
                    Quantity:
                  </span>
                  <div className='h-10 w-[120px] sm:h-[50px] sm:w-[150px] p-1 flex justify-between items-center bg-white rounded-xl border ml-1'>
                    <button
                      className='w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border-2 border-red-500 bg-blue-200 hover:bg-red-400'
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.quantity === 1}
                    >
                      <FontAwesomeIcon
                        icon={faMinus}
                        className='text-sm sm:text-lg'
                      />
                    </button>

                    <span className='text-xl'>{item.quantity}</span>

                    <button
                      className='w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border-2 border-red-500 bg-blue-200 hover:bg-green-400'
                      onClick={() => increaseQuantity(item.id)}
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        className='text-sm sm:text-lg'
                      />
                    </button>
                  </div>
                </div>

                {/* Total */}
                <p className='sm:text-right font-semibold'>
                  <span className='text-gray-400 text-sm sm:hidden'>
                    Total:
                  </span>
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
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

          {/* Coupon */}
          <div className='mt-6 flex gap-2'>
            <input
              type='text'
              placeholder='Coupon Code'
              className='flex-1 border rounded-lg px-3 py-2'
            />
            <button className='bg-black text-white px-4 rounded-lg cursor-pointer'>
              Apply
            </button>
          </div>

          {/* Checkout */}
          <Link to='/checkout' className='block'>
            <button className='w-full mt-6 bg-black py-3 rounded-xl cursor-pointer overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-white'>
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
