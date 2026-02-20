import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar({ products }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [isFocused, setIsFocused] = useState(false)

  const filteredProducts =
    debouncedQuery.trim().length === 0 || !isFocused
      ? []
      : products
          .filter((product) =>
            product.title.toLowerCase().includes(debouncedQuery.toLowerCase()),
          )
          .slice(0, 6);

  // function to highlight search result text
  const highlightedText = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className='text-blue-600 font-semibold'>
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  // function to close dropdown upon clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setQuery('');
        setActiveIndex(-1);
        setIsFocused(false)
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // debouncing for optimized performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      setActiveIndex(-1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  // function recent search result fetching
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setRecentSearches(stored);
  }, []);

  const saveRecentSearch = (product) => {
    setRecentSearches((prev) => {
      const updated = [
        product,
        ...prev.filter((p) => p.id !== product.id),
      ].slice(0, 5);

      localStorage.setItem('recentSearches', JSON.stringify(updated));
      return updated;
    });
  };

  // function to clear recent search
  const clearRecentSearches = () => {
    localStorage.removeItem('recentSearches')
    setRecentSearches([])
  }

  return (
    <div className='bg-blue-300 px-5 py-3'>
      <div ref={containerRef} className='max-w-6xl mx-auto relative'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!query.trim()) return;

            navigate(`/search?q=${encodeURIComponent(query)}`);
            setQuery('');
          }}
        >
          <input
            type='text'
            value={query}
            onFocus={() => setIsFocused(true)}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(-1);
            }}
            onKeyDown={(e) => {
              if (!filteredProducts.length) return;

              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActiveIndex((prev) =>
                  prev < filteredProducts.length - 1 ? prev + 1 : 0,
                );
              }

              if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActiveIndex((prev) =>
                  prev > 0 ? prev - 1 : filteredProducts.length - 1,
                );
              }

              if (e.key === 'Enter' && activeIndex >= 0) {
                const product = filteredProducts[activeIndex];
                saveRecentSearch(product);
                navigate(`/products/${filteredProducts[activeIndex].id}`);
                setQuery('');
                setActiveIndex(-1);
                setIsFocused(false);
              }

              if (e.key === 'Escape') {
                setQuery('');
                setActiveIndex(-1);
              }
            }}
            placeholder='Search for products...'
            className='w-full px-4 py-3 rounded-xl bg-white outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500'
          />
        </form>
        {isFocused && query.length === 0 && recentSearches.length > 0 && (
          <div className='absolute top-full left-0 right-0 bg-white rounded-xl shadow-lg mt-2 z-50'>
            <div className='flex items-center justify-between px-4 py-2'>
              <p className='text-sm text-gray-500'>Recent searches</p>
              <button
                type='button'
                onClick={clearRecentSearches}
                className='text-sm text-blue-600 hover:underline'
              >
                Clear
              </button>
            </div>

            {recentSearches.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/products/${product.id}`)}
                className='flex items-center gap-3 px-4 py-3 hover:bg-gray-200 cursor-pointer'
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className='w-10 h-10 rounded-md object-cover'
                />
                <span className='font-medium'>{product.title}</span>
              </div>
            ))}
          </div>
        )}

        {filteredProducts.length > 0 && (
          <div className='absolute top-full left-0 right-0 bg-white rounded-xl shadow-lg mt-2 z-50'>
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                onClick={() => {
                  saveRecentSearch(product);
                  navigate(`/products/${product.id}`);
                  setQuery('');
                  setActiveIndex(-1);
                }}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${index === activeIndex ? 'bg-gray-200' : 'hover:bg-gray-200'} `}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className='w-12 h-12 object-cover rounded-md'
                />
                <div>
                  <p className='font-medium'>
                    {highlightedText(product.title, query)}
                  </p>
                  <p className='text-sm text-gray-500'>${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
