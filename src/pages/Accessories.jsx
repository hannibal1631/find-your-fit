import { useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';

function Accessories() {
  const { products } = useOutletContext();

  if (!Array.isArray(products)) {
    return <p className='text-center py-20'>Loading...</p>;
  }

  const getProducts = (category, count = 6) =>
    products.filter((p) => p.category === category).slice(0, count);

  return (
    <main className='w-full overflow-x-hidden'>
      {/* HERO */}
      <section className='min-h-[65vh] bg-linear-to-b from-cyan-400 to-teal-600 flex items-center'>
        <div className='max-w-7xl mx-auto px-6'>
          <h1 className='text-5xl md:text-6xl font-extrabold text-white'>
            Accessories Hub
          </h1>
          <p className='mt-5 text-cyan-100 text-lg'>Style is in the details.</p>
        </div>
      </section>

      {/* SUNGLASSES */}
      <section className='bg-teal-600 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-8'>Sunglasses</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {getProducts('sunglasses', 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* BAGS */}
      <section className='bg-linear-to-b from-teal-600 to-emerald-600 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-8'>Bags</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {getProducts('womens-bags', 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* JEWELLERY + SPORTS */}
      <section className='bg-linear-to-b from-emerald-600 to-lime-500 py-20'>
        <div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-white text-3xl font-bold mb-7'>Jewellery</h2>
            <div className='grid grid-cols-2 gap-5'>
              {getProducts('womens-jewellery', 4).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-white text-3xl font-bold mb-7'>Sports</h2>
            <div className='grid grid-cols-2 gap-5'>
              {getProducts('sports-accessories', 4).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section className='bg-linear-to-b from-lime-500 to-slate-900 py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-8'>
            Trending Accessories
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {products.slice(12, 20).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Accessories;

// import ProductCard from '../components/ProductCard.jsx';
// import { useOutletContext } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import ProductsSection from '../components/ProductsSection.jsx';

// function Accessories() {
//   const { products } = useOutletContext();

//   if (!Array.isArray(products)) {
//     return <p className='text-center py-10'>Loading Products...</p>;
//   }

//   const beautyProducts = products
//     .filter((p) => p.category.startsWith('beauty'))
//     .slice(0, 10);
//   const fragrancesProducts = products
//     .filter((p) => p.category.startsWith('fragrances'))
//     .slice(0, 10);
//   const sunglassesProducts = products
//     .filter((p) => p.category.startsWith('sunglasses'))
//     .slice(0, 10);

//   return (
//     <main className='bg-blue-300'>
//       <div className='max-w-7xl mx-auto px-5 py-5 h-full flex flex-col gap-7'>
//         <ProductsSection
//           title={'Beauty'}
//           products={beautyProducts}
//           seeMoreLink='/accessories'
//         />
//         <ProductsSection
//           title={'Fragrances'}
//           products={fragrancesProducts}
//           seeMoreLink='/accessories'
//         />
//         <ProductsSection
//           title={'Sunglasses'}
//           products={sunglassesProducts}
//           seeMoreLink='/accessories'
//         />
//       </div>
//     </main>
//   );
// }

// export default Accessories;
