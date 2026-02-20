import ProductCard from './ProductCard.jsx';
import { Link } from 'react-router-dom';

function ProductsSection({ title, products, seeMoreLink }) {
  return (
    <section className='bg-amber-400 px-3 py-5'>
      {/* Header */}
      <div className='flex justify-between items-center mb-3 px-2'>
        <h2 className='font-semibold text-3xl'>{title}</h2>

        <Link
          to={seeMoreLink}
          className='hover:underline hover:text-blue-600 transition-all duration-200'
        >
          See More &gt;&gt;
        </Link>
      </div>

      {/* Products */}
      <div className='grid grid-cols-2 gap-3 md:flex md:gap-4 md:overflow-x-auto md:overflow-y-hidden md:pb-3 md:no-scrollbar'>
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`shrink-0 ${index >= 4 ? 'hidden md:block' : ''}`}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
