import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

function ProductDetails() {
  const { id } = useParams();
  // console.log("Product ID:", id)

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const { addToCart, cartItems } = useContext(CartContext);

  const isAdded = product ?  cartItems.some((item) => item.id === product.id): false;

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
        console.log(response.data);
      } catch (err) {
        setError('failed to fetch product');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    setActiveImage(0);
  }, [id]);

  const handleAddToCart = () => {
    console.log({
      id: product.id,
      title: product.title,
      quantity,
    });

    addToCart(product, quantity)
  };

  const increaseQuantity = () => {
    if (!isAdded) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (!isAdded && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setQuantity(1);
  }, [id]);

  if (loading) return <p className='text-center py-10'>Loading...</p>;
  if (error) return <p className='text-center py-10'>{error}</p>;
  if (!product) return null;

  return (
    <div className='bg-blue-300 min-h-full'>
      <div className='max-w-7xl mx-auto px-5 py-5 h-full flex lg:flex-row flex-col'>
        {/* image div */}
        <div className='lg:w-1/2 flex flex-col items-center lg:sticky lg:top-24'>
          <div className='bg-white p-4 rounded-2xl shadow-lg'>
            <img
              src={product.images[activeImage]}
              alt={product.title}
              className='h-80 w-80 object-contain rounded-xl transition-all duration-300'
            />
          </div>
          <div className='flex gap-3 mt-5'>
            {product.images.slice(0, 4).map((img, index) => (
              <span
                key={index}
                onClick={() => setActiveImage(index)}
                className={`cursor-pointer border-2 rounded-lg p-1 transition-all duration-200 hover:scale-105 ${
                  activeImage === index ? 'border-blue-600' : 'border-gray-200'
                }`}
              >
                <img
                  src={img}
                  alt={`${product.title}-${index}`}
                  className='h-16 w-16 object-cover rounded-md'
                />
              </span>
            ))}
          </div>
        </div>
        {/* product details div */}
        <div className='lg:w-1/2 flex flex-col gap-y-4 mt-8 lg:mt-0 lg:pl-12'>
          <div>
            <h1 className='font-semibold text-2xl lg:text-4xl leading-tight'>
              {product.title}
            </h1>
          </div>
          <div>
            <h3 className='lg:text-xl text-lg text-gray-600'>
              <span className='font-medium text-gray-800'>Brand:</span>{' '}
              {product.brand}
            </h3>
          </div>
          <div>
            <p className='text-gray-600 leading-relaxed'>
              {product.description}
            </p>
          </div>
          {/* rating block */}
          <div className='flex items-center gap-3 bg-white w-fit px-2 rounded-xl'>
            <div className='flex items-center gap-1 text-yellow-500'>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>
                  {i < Math.round(product.rating) ? (
                    <FontAwesomeIcon icon={faStarSolid} />
                  ) : (
                    <FontAwesomeIcon icon={faStarRegular} />
                  )}
                </span>
              ))}
            </div>
            <span className='text-gray-600 text-lg font-semibold'>
              {product.rating} / 5
            </span>
          </div>
          {/* price block */}
          <div className='flex flex-col lg:flex-row gap-4 items-start lg:items-center bg-gray-50 p-4 rounded-xl shadow-sm'>
            <div className='flex flex-row gap-2 items-center'>
              <h2 className='text-3xl font-bold'>${product.price}</h2>
              <h3 className='text-lg text-red-500 font-semibold'>
                -{product.discountPercentage}%
              </h3>
            </div>
            <div>
              <span className='text-lg font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full'>
                {product.availabilityStatus}
              </span>
            </div>
          </div>
          {/* product info block */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm'>
            <span className='bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-center'>
              {product.shippingInformation}
            </span>
            <span className='bg-purple-50 text-purple-700 px-4 py-2 rounded-lg text-center'>
              {product.returnPolicy}
            </span>
            <span className='bg-orange-50 text-orange-700 px-4 py-2 rounded-lg text-center'>
              {product.warrantyInformation}
            </span>
          </div>
          {/* add to cart button */}
          <div className='flex flex-row max-w-full justify-evenly items-center'>
            <div className='h-[50px] w-[150px] p-1 flex flex-row justify-between items-center gap-3 bg-white rounded-xl'>
              {/* minus button start */}
              <button
                className={`w-10 h-10 flex items-center justify-center rounded-lg border-2 ${
                  isAdded
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'border-red-500 bg-blue-200 cursor-pointer hover:bg-red-400'
                } `}
                onClick={decreaseQuantity}
                disabled={isAdded || quantity === 1}
              >
                <FontAwesomeIcon icon={faMinus} className='text-lg' />
              </button>
              {/* minus button end */}
              <div>
                <span className='text-2xl'>{quantity}</span>
              </div>
              {/* plus button start */}
              <button
                className={`w-10 h-10 flex items-center justify-center rounded-lg border-2  ${
                  isAdded
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'border-red-500 bg-blue-200 cursor-pointer hover:bg-green-400'
                }`}
                onClick={increaseQuantity}
                disabled={isAdded}
              >
                <FontAwesomeIcon icon={faPlus} className='text-lg' />
              </button>
              {/* plus button end */}
            </div>
            <div>
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`w-[150px] h-[50px] my-3 flex items-center justify-center rounded-xl relative overflow-hidden transition-all duration-300 shadow-md ${
                  isAdded
                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                    : 'bg-black text-white cursor-pointer hover:scale-105 hover:shadow-lg'
                }`}
              >
                {isAdded ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
