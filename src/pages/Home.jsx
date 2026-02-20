import { useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';

function Home() {
  const { products } = useOutletContext();

  if (!Array.isArray(products)) {
    return <p className='text-center py-20'>Loading...</p>;
  }

  const getProducts = (category, count = 6) =>
    products.filter((p) => p.category === category).slice(0, count);

  return (
    <main className='w-full overflow-x-hidden'>
      {/* HERO */}
      <section className='min-h-[65vh] bg-linear-to-b from-amber-200 to-orange-500 flex items-center'>
        <div className='max-w-7xl mx-auto px-6'>
          <h1 className='text-5xl md:text-6xl font-extrabold text-white'>
            Home Essentials
          </h1>
          <p className='mt-5 text-orange-100 max-w-lg text-lg'>
            Comfort. Style. Functionality.
          </p>
        </div>
      </section>

      {/* FURNITURE */}
      <section className='bg-orange-500 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-8'>Furniture</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {getProducts('furniture', 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* DECOR */}
      <section className='bg-linear-to-b from-orange-500 to-rose-500 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-8'>Decor</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {getProducts('home-decoration', 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* KITCHEN + GROCERIES */}
      <section className='bg-linear-to-b from-rose-500 to-purple-600 py-20'>
        <div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-white text-3xl font-bold mb-7'>Kitchen</h2>
            <div className='grid grid-cols-2 gap-5'>
              {getProducts('kitchen-accessories', 4).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-white text-3xl font-bold mb-7'>Groceries</h2>
            <div className='grid grid-cols-2 gap-5'>
              {getProducts('groceries', 4).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE PICKS */}
      <section className='bg-linear-to-b from-purple-600 to-slate-900 py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-8'>
            Trending Home Picks
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {products.slice(10, 18).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
