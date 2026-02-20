import { useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';

function Tech() {
  const { products } = useOutletContext();

  if (!Array.isArray(products)) {
    return <p className='text-center py-20'>Loading...</p>;
  }

  const getProducts = (category, count = 6) =>
    products.filter((p) => p.category === category).slice(0, count);

  return (
    <main className='w-full overflow-x-hidden'>
      {/* HERO */}
      <section className='min-h-[65vh] bg-linear-to-b from-slate-900 to-cyan-600 flex items-center'>
        <div className='w-full px-6 max-w-7xl mx-auto'>
          <h1 className='text-5xl md:text-6xl font-extrabold text-white'>
            Tech Zone
          </h1>
          <p className='mt-5 max-w-lg text-cyan-100 text-lg'>
            Power. Precision. Performance.
          </p>
        </div>
      </section>

      {/* PHONES */}
      <section className='w-full bg-cyan-600 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-8'>Smartphones</h2>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {getProducts('smartphones', 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* LAPTOPS */}
      <section className='w-full bg-linear-to-b from-cyan-600 to-sky-600 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-8'>Laptops</h2>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {getProducts('laptops', 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* TABLETS */}
      <section className='w-full bg-linear-to-b from-sky-600 to-blue-600 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-8'>Tablets</h2>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {getProducts('tablets', 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ACCESSORIES */}
      <section className='w-full bg-linear-to-b from-blue-600 to-indigo-700 py-20'>
        <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-white text-3xl font-bold mb-7'>
              Mobile Accessories
            </h2>
            <div className='grid grid-cols-2 gap-5'>
              {getProducts('mobile-accessories', 4).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-white text-3xl font-bold mb-7'>
              Sunglasses Tech
            </h2>
            <div className='grid grid-cols-2 gap-5'>
              {getProducts('sunglasses', 4).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className='w-full bg-linear-to-b from-indigo-700 to-black py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-8'>Power Picks</h2>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {products.slice(0, 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Tech;
