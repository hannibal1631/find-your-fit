import { useSearchParams, useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';

function SearchResults() {
  const { products } = useOutletContext();
  const [searchParams] = useSearchParams();

  const query = searchParams.get('q')?.toLowerCase() || '';

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query),
  );

  return (
    <div className='max-w-7xl mx-auto px-5 py-10'>
      <h1 className='text-3xl font-semibold mb-6'>
        Search results for "{query}"
      </h1>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
