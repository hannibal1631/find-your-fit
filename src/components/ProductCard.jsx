import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  // console.log(product);
  // console.log(product.thumbnail);
  const navigate = useNavigate();

  return (
    <div className='w-full sm:w-52 md:w-57.5 h-auto bg-gray-50 p-3 flex flex-col gap-2 rounded-2xl'>
      <img
        src={product.thumbnail}
        alt={product.title}
        className='h-40 sm:h-44 md:h-48 w-full object-cover bg-gray-700 rounded-xl'
        onClick={() => navigate(`/products/${product.id}`)}
      />
      <span
        className='text-sm sm:text-base font-semibold text-black overflow-hidden'
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 1,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {product.title}
      </span>
      <span className='font-bold text-red-600'>${product.price}</span>

      <button
        className='hover:bg-sky-700 cursor-pointer text-gray-50 bg-sky-800 py-2 rounded-md'
        onClick={() => navigate(`/products/${product.id}`)}
      >
        See More
      </button>
    </div>
  );
};

export default ProductCard;
