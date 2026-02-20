import { useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';

function Women() {
  const { products } = useOutletContext();

  if (!Array.isArray(products)) {
    return <p className='text-center py-20'>Loading...</p>;
  }

  const getProducts = (category, count = 6) =>
    products.filter((p) => p.category === category).slice(0, count);

  return (
    <main className='w-full overflow-x-hidden'>
      {/* HERO */}
      <section className='min-h-[65vh] bg-linear-to-b from-rose-200 to-pink-500 flex items-center'>
        <div className='w-full px-6 max-w-7xl mx-auto'>
          <h1 className='text-5xl md:text-6xl font-extrabold text-white'>
            Women’s Collection
          </h1>
          <p className='mt-5 max-w-lg text-pink-100 text-lg'>
            Timeless elegance. Modern confidence.
          </p>
        </div>
      </section>

      {/* DRESSES */}
      <section className='w-full bg-pink-500 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-8'>Dresses</h2>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {getProducts('womens-dresses', 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* BAGS */}
      <section className='w-full bg-linear-to-b from-pink-500 to-fuchsia-600 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-8'>Bags</h2>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {getProducts('womens-bags', 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* SHOES */}
      <section className='w-full bg-linear-to-b from-fuchsia-600 to-violet-600 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-8'>Shoes</h2>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {getProducts('womens-shoes', 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* JEWELLERY + WATCHES */}
      <section className='w-full bg-linear-to-b from-violet-600 to-indigo-700 py-20'>
        <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-white text-3xl font-bold mb-7'>Jewellery</h2>
            <div className='grid grid-cols-2 gap-5'>
              {getProducts('womens-jewellery', 4).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-white text-3xl font-bold mb-7'>Watches</h2>
            <div className='grid grid-cols-2 gap-5'>
              {getProducts('womens-watches', 4).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEAUTY + SKINCARE */}
      <section className='w-full bg-linear-to-b from-indigo-700 to-slate-900 py-20'>
        <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-white text-3xl font-bold mb-7'>Beauty</h2>
            <div className='grid grid-cols-2 gap-5'>
              {getProducts('beauty', 4).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-white text-3xl font-bold mb-7'>Skin Care</h2>
            <div className='grid grid-cols-2 gap-5'>
              {getProducts('skin-care', 4).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Women;

// import ProductCard from '../components/ProductCard.jsx';
// import { useOutletContext } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import ProductsSection from '../components/ProductsSection.jsx';

// function Women() {
//   const { products } = useOutletContext();

//   if (!Array.isArray(products)) {
//     return <p className='text-center py-10'>Loading products...</p>;
//   }

//   const womensDressProducts = products
//     .filter((p) => p.category.startsWith('womens'))
//     .slice(5, 15);
//   const womensJewellerryProducts = products
//     .filter((p) => p.category.startsWith('womens'))
//     .slice(15, 25);
//   const womensShoesProducts = products
//     .filter((p) => p.category.startsWith('womens'))
//     .slice(0, 10);

//   return (
//     <main className='bg-blue-300'>
//       <div className='max-w-7xl mx-auto px-5 py-5 h-full flex flex-col gap-7'>
//         <ProductsSection
//           title={`Women's Dresses`}
//           products={womensDressProducts}
//           seeMoreLink='women'
//         />
//         <ProductsSection
//           title={`Women's Jwelleries`}
//           products={womensJewellerryProducts}
//           seeMoreLink='women'
//         />
//         <ProductsSection
//           title={`Women's Shoes`}
//           products={womensShoesProducts}
//           seeMoreLink='women'
//         />
//       </div>
//     </main>
//   );
// }

// export default Women;
