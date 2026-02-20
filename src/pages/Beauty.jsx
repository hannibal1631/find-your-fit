import { useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';

function Beauty() {
  const { products } = useOutletContext();

  if (!Array.isArray(products)) {
    return <p className='text-center py-20'>Loading...</p>;
  }

  const getProducts = (category, count = 6) =>
    products.filter((p) => p.category === category).slice(0, count);

  return (
    <main className='w-full overflow-x-hidden'>
      {/* HERO */}
      <section className='min-h-[65vh] bg-linear-to-b from-pink-300 to-rose-500 flex items-center'>
        <div className='max-w-7xl mx-auto px-6'>
          <h1 className='text-5xl md:text-6xl font-extrabold text-white'>
            Beauty Collection
          </h1>
          <p className='mt-5 text-pink-100 text-lg'>Glow with confidence.</p>
        </div>
      </section>

      {/* BEAUTY */}
      <section className='bg-rose-500 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-8'>Makeup</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {getProducts('beauty', 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* SKINCARE */}
      <section className='bg-linear-to-b from-rose-500 to-fuchsia-600 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-8'>Skin Care</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {getProducts('skin-care', 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* FRAGRANCES */}
      <section className='bg-linear-to-b from-fuchsia-600 to-violet-700 py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-8'>Fragrances</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {getProducts('fragrances', 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section className='bg-linear-to-b from-violet-700 to-black py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-8'>Hot Right Now</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {products.slice(5, 13).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Beauty;
