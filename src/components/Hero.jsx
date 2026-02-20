import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from './ProductCard.jsx';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

function Hero() {
  const { products } = useOutletContext();

  if (!Array.isArray(products)) {
    return <p className='text-center py-20'>Loading products...</p>;
  }

  /*  helpers  */
  const byCategory = (categories, limit = 8) =>
    products.filter((p) => categories.includes(p.category)).slice(0, limit);

  const trendingProducts = products.slice(0, 10);
  const hotDeals = [...products].filter((p) => p.price < 50).slice(0, 8);

  const men = byCategory(['mens-shirts', 'mens-shoes', 'mens-watches'], 8);

  const women = byCategory(
    ['womens-dresses', 'womens-bags', 'womens-jewellery'],
    8,
  );

  const tech = byCategory(['smartphones', 'laptops', 'mobile-accessories'], 8);

  const home = byCategory(
    ['furniture', 'home-decoration', 'kitchen-accessories'],
    8,
  );

  const beauty = byCategory(['beauty', 'skin-care', 'fragrances'], 8);

  return (
    <main className='bg-slate-950 text-white overflow-hidden'>
      {/* HERO SECTION */}
      <section className='relative'>
        <div className='absolute inset-0 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x opacity-80' />

        <div className='relative max-w-7xl mx-auto px-6 py-28 text-center'>
          <Fade cascade damping={0.2}>
            <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight'>
              Discover Your Next Favorite Thing
            </h1>
            <p className='mt-6 text-lg md:text-xl opacity-90'>
              Curated picks. Trending styles. Unmatched deals.
            </p>

            <Link
              to='/shop'
              className='inline-block mt-10 bg-white text-black font-semibold px-10 py-4 rounded-2xl hover:scale-105 transition'
            >
              Shop Now
            </Link>
          </Fade>
        </div>
      </section>

      {/* TRENDING */}
      <Section title='🔥 Trending Now' link='/trending'>
        <Slide direction='left' triggerOnce>
          <HorizontalProducts products={trendingProducts} />
        </Slide>
      </Section>

      {/* CATEGORY GRID */}
      <section className='max-w-7xl mx-auto px-6 py-20'>
        <Fade>
          <h2 className='text-4xl font-bold mb-10 text-center'>
            Shop by Category
          </h2>
        </Fade>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-6'>
          {[
            { name: 'Men', link: '/men' },
            { name: 'Women', link: '/women' },
            { name: 'Tech', link: '/tech' },
            { name: 'Home', link: '/home' },
            { name: 'Beauty', link: '/beauty' },
            { name: 'Accessories', link: '/accessories' },
          ].map((cat, i) => (
            <Zoom key={cat.name} delay={i * 100} className='w-full'>
              <Link
                to={cat.link}
                className='block w-full h-full bg-linear-to-br from-slate-800 to-slate-700 rounded-2xl p-6 text-center font-semibold hover:scale-105 transition shadow-lg'
              >
                {cat.name}
              </Link>
            </Zoom>
          ))}
        </div>
      </section>

      {/* MEN */}
      <Section title="Men's Picks" link='/men'>
        <Fade triggerOnce>
          <GridProducts products={men} />
        </Fade>
      </Section>

      {/* WOMEN */}
      <Section title="Women's Favorites" link='/women'>
        <Fade triggerOnce>
          <GridProducts products={women} />
        </Fade>
      </Section>

      {/* HOT DEALS */}
      <section className='bg-linear-to-r from-red-600/20 to-orange-500/20'>
        <Section title='🔥 Hot Deals' link='/deals'>
          <Slide direction='up' triggerOnce>
            <GridProducts products={hotDeals} />
          </Slide>
        </Section>
      </section>

      {/* TECH */}
      <Section title='Tech Essentials' link='/tech'>
        <Fade triggerOnce>
          <GridProducts products={tech} />
        </Fade>
      </Section>

      {/* HOME */}
      <Section title='Home & Living' link='/home'>
        <Fade triggerOnce>
          <GridProducts products={home} />
        </Fade>
      </Section>

      {/* BEAUTY */}
      <Section title='Beauty & Care' link='/beauty'>
        <Fade triggerOnce>
          <GridProducts products={beauty} />
        </Fade>
      </Section>
    </main>
  );
}

/*  reusable components  */
function Section({ title, link, children }) {
  return (
    <section className='max-w-7xl mx-auto px-6 py-20'>
      <div className='flex justify-between items-center mb-10'>
        <h2 className='text-4xl font-bold'>{title}</h2>
        <Link to={link} className='text-indigo-400 hover:underline'>
          See all →
        </Link>
      </div>
      {children}
    </section>
  );
}

function GridProducts({ products }) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8'>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

function HorizontalProducts({ products }) {
  return (
    <div className='flex gap-5 overflow-x-auto pb-4 no-scrollbar'>
      {products.map((p) => (
        <div key={p.id} className='shrink-0'>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}

export default Hero;

// import { useOutletContext, Link } from 'react-router-dom';
// import ProductCard from './ProductCard.jsx';

// function Body() {
//   const { products } = useOutletContext();

//   if (!Array.isArray(products)) {
//     return <p className='text-center py-20'>Loading products...</p>;
//   }

//   // helpers
//   const byCategory = (categories, limit = 8) =>
//     products.filter((p) => categories.includes(p.category)).slice(0, limit);

//   const trendingProducts = products.slice(0, 10);

//   const hotDeals = [...products].filter((p) => p.price < 50).slice(0, 8);

//   const men = byCategory(['mens-shirts', 'mens-shoes', 'mens-watches'], 8);

//   const women = byCategory(
//     ['womens-dresses', 'womens-bags', 'womens-jewellery'],
//     8,
//   );

//   const tech = byCategory(['smartphones', 'laptops', 'mobile-accessories'], 8);

//   const home = byCategory(
//     ['furniture', 'home-decoration', 'kitchen-accessories'],
//     8,
//   );

//   const beauty = byCategory(['beauty', 'skin-care', 'fragrances'], 8);

//   return (
//     <main className='bg-slate-50'>
//       {/* HERO */}
//       <section className='bg-linear-to-r from-sky-600 to-indigo-600 text-white'>
//         <div className='max-w-7xl mx-auto px-6 py-20 text-center'>
//           <h1 className='text-4xl md:text-6xl font-bold mb-4'>
//             Discover Your Next Favorite Thing
//           </h1>
//           <p className='text-lg md:text-xl opacity-90 mb-8'>
//             Curated picks, trending styles, unbeatable deals
//           </p>
//           <Link
//             to='/shop'
//             className='inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-xl hover:scale-105 transition'
//           >
//             Shop Now
//           </Link>
//         </div>
//       </section>

//       {/* TRENDING */}
//       <Section title='🔥 Trending Now' link='/trending'>
//         <HorizontalProducts products={trendingProducts} />
//       </Section>

//       {/* SHOP BY CATEGORY */}
//       <section className='max-w-7xl mx-auto px-6 py-16'>
//         <h2 className='text-3xl font-bold mb-8'>Shop by Category</h2>
//         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>
//           {[
//             { name: 'Men', link: '/men' },
//             { name: 'Women', link: '/women' },
//             { name: 'Tech', link: '/tech' },
//             { name: 'Home', link: '/home' },
//             { name: 'Beauty', link: '/beauty' },
//             { name: 'Accessories', link: '/accessories' },
//           ].map((cat) => (
//             <Link
//               key={cat.name}
//               to={cat.link}
//               className='bg-white rounded-2xl p-6 text-center shadow hover:shadow-lg transition font-semibold'
//             >
//               {cat.name}
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* MEN */}
//       <Section title="Men's Picks" link='/men'>
//         <GridProducts products={men} />
//       </Section>

//       {/* WOMEN */}
//       <Section title="Women's Favorites" link='/women'>
//         <GridProducts products={women} />
//       </Section>

//       {/* HOT DEALS */}
//       <section className='bg-red-50'>
//         <Section title='🔥 Hot Deals' link='/deals'>
//           <GridProducts products={hotDeals} />
//         </Section>
//       </section>

//       {/* TECH */}
//       <Section title='Tech Essentials' link='/tech'>
//         <GridProducts products={tech} />
//       </Section>

//       {/* HOME & BEAUTY */}
//       <Section title='Home & Living' link='/home'>
//         <GridProducts products={home} />
//       </Section>

//       <Section title='Beauty & Care' link='/beauty'>
//         <GridProducts products={beauty} />
//       </Section>
//     </main>
//   );
// }

// /* ---------- reusable section wrappers ---------- */

// function Section({ title, link, children }) {
//   return (
//     <section className='max-w-7xl mx-auto px-6 py-16'>
//       <div className='flex justify-between items-center mb-6'>
//         <h2 className='text-3xl font-bold'>{title}</h2>
//         <Link to={link} className='text-blue-600 hover:underline'>
//           See all →
//         </Link>
//       </div>
//       {children}
//     </section>
//   );
// }

// function GridProducts({ products }) {
//   return (
//     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
//       {products.map((p) => (
//         <ProductCard key={p.id} product={p} />
//       ))}
//     </div>
//   );
// }

// function HorizontalProducts({ products }) {
//   return (
//     <div className='flex gap-4 overflow-x-auto pb-4 no-scrollbar'>
//       {products.map((p) => (
//         <div key={p.id} className='shrink-0'>
//           <ProductCard product={p} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Body;

// // import ProductCard from './ProductCard.jsx';
// // import { Link, useOutletContext } from 'react-router-dom';
// // import ProductsSection from './ProductsSection.jsx';

// // function Body() {
// //   const { products } = useOutletContext();
// //   console.log('BODY PRODUCTS:', products);
// //   // const categories = [...new Set(products.map((p) => p.category))];
// //   // console.log('CATEGORIES FROM API:', categories);

// //   if (!Array.isArray(products)) {
// //     return <p className='text-center py-10'>Loading products...</p>;
// //   }

// //   const menProducts = products
// //     .filter((p) => p.category.startsWith('mens'))
// //     .slice(0, 10);

// //   const womenProducts = products
// //     .filter((p) => p.category.startsWith('womens'))
// //     .slice(0, 10);

// //   const accessoriesProduct = products
// //     .filter((p) => p.category.startsWith('beauty'))
// //     .slice(0, 10);
// //   // console.log(menProducts.length, womenProducts.length, accessoriesProduct.length);

// //   return (
// //     <main className='bg-blue-300'>
// //       <div className='max-w-7xl mx-auto px-5 py-5 h-full flex flex-col gap-7'>
// //         <ProductsSection
// //           title='Men'
// //           products={menProducts}
// //           seeMoreLink='/men'
// //         />
// //         <ProductsSection
// //           title='Women'
// //           products={womenProducts}
// //           seeMoreLink='/women'
// //         />
// //         <ProductsSection
// //           title='Accessories'
// //           products={accessoriesProduct}
// //           seeMoreLink='/accessories'
// //         />
// //       </div>
// //     </main>

// //   );
// // }

// // export default Body;
