import { useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';

function Men() {
  const { products } = useOutletContext();

  if (!Array.isArray(products)) {
    return <p className='text-center py-20'>Loading...</p>;
  }

  const getProducts = (category, count = 6) =>
    products.filter((p) => p.category === category).slice(0, count);

  return (
    <main className='w-full overflow-x-hidden'>
      {/* HERO */}
      <section className='min-h-[70vh] bg-linear-to-b from-black to-blue-600 text-white flex items-center'>
        <div className='w-full px-6 max-w-7xl mx-auto'>
          <h1 className='text-5xl md:text-6xl font-extrabold tracking-tight'>
            Men’s Essentials
          </h1>
          <p className='mt-6 max-w-xl text-gray-300 text-lg'>
            Clean fits. Sharp gear. Built for everyday dominance.
          </p>
        </div>
      </section>

      {/* SHIRTS */}
      <section className='w-full bg-blue-600 py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-10'>
            Shirts that Speak
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {getProducts('mens-shirts', 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* SHOES */}
      <section className='w-full bg-linear-to-b from-blue-600 to-emerald-500 py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-10'>Footwear Game</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {getProducts('mens-shoes', 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* WATCHES */}
      <section className='w-full bg-linear-to-b from-emerald-500 to-yellow-400 py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-black text-3xl font-bold mb-10'>Watches</h2>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {getProducts('mens-watches', 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* SUNGLASSES */}
      <section className='w-full bg-linear-to-b from-yellow-400 to-purple-600 py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-white text-3xl font-bold mb-10'>
            Shades & Style
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            {getProducts('sunglasses', 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* SPORTS & MOTORCYCLE – split layout */}
      <section className='w-full bg-linear-to-b from-purple-600 to-slate-900 py-24'>
        <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16'>
          <div>
            <h2 className='text-white text-3xl font-bold mb-8'>
              Sports Accessories
            </h2>
            <div className='grid grid-cols-2 gap-6'>
              {getProducts('sports-accessories', 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-white text-3xl font-bold mb-8'>
              Motorcycle Gear
            </h2>
            <div className='grid grid-cols-2 gap-6'>
              {getProducts('motorcycle', 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Men;

// import ProductCard from '../components/ProductCard.jsx';
// import { useOutletContext } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import ProductsSection from '../components/ProductsSection.jsx';

// function Men() {
//   const { products } = useOutletContext();

//   if (!Array.isArray(products)) {
//     return <p className='text-center py-10'>Loading products...</p>;
//   }

//   const menProducts = products
//     .filter((p) => p.category.startsWith('mens'))
//     .slice(0, 10);

//   const menProductsTwo = products
//     .filter((p) => p.category.startsWith('mens'))
//     .slice(5, 15);

//   const menProductsThree = products
//     .filter((p) => p.category.startsWith('mens'))
//     .slice(10, 20);

//   return (
//     <main className='bg-blue-300'>
//       <div className='max-w-7xl mx-auto px-5 py-5 h-full flex flex-col gap-7'>
//         <ProductsSection
//           title={`Men's Dresses`}
//           products={menProducts}
//           seeMoreLink='/men'
//         />
//         <ProductsSection
//           title={`Men's Shoes`}
//           products={menProductsTwo}
//           seeMoreLink='/men'
//         />
//         <ProductsSection
//           title={`Men's Watches`}
//           products={menProductsThree}
//           seeMoreLink='/men'
//         />
//       </div>
//     </main>
//   );
// }

// export default Men;
