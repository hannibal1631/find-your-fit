import {
  faCartShopping,
  faCircleUser,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useState } from 'react';

function Header() {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className='bg-blue-600'>
      <div className='px-5 max-w-7xl mx-auto'>
        <nav className='flex justify-between items-center h-20'>
          <div>
            <Link to='/'>
              <h1>Find you fit</h1>
            </Link>
          </div>
          <div className='hidden lg:flex text-2xl gap-10 font-semibold '>
            <Link
              to='/men'
              className='transition-all duration-200 hover:underline hover:text-green-500'
            >
              Men
            </Link>
            <Link
              to='/women'
              className='transition-all duration-200 hover:underline hover:text-green-500'
            >
              Women
            </Link>
            <Link
              to='/tech'
              className='transition-all duration-200 hover:underline hover:text-green-500'
            >
              Tech
            </Link>
            <Link
              to='/home'
              className='transition-all duration-200 hover:underline hover:text-green-500'
            >
              Home
            </Link>
            <Link
              to='/beauty'
              className='transition-all duration-200 hover:underline hover:text-green-500'
            >
              Beauty
            </Link>
            <Link
              to='/accessories'
              className='transition-all duration-200 hover:underline hover:text-green-500'
            >
              Accessories
            </Link>
          </div>
          <div className='flex flex-row items-center gap-4'>
            <Link to='/cart' className='relative'>
              <FontAwesomeIcon icon={faCartShopping} className='text-2xl' />

              {totalItems > 0 && (
                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                  {totalItems}
                </span>
              )}
            </Link>
            <Link to='/signup'>
              <FontAwesomeIcon icon={faCircleUser} className='text-2xl' />
            </Link>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className='lg:hidden text-2xl'
            >
              <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className='lg:hidden bg-blue-600 border-t border-blue-500'>
            <div className='flex flex-col px-5 py-4 gap-4 text-lg font-semibold'>
              <Link to='/men' onClick={() => setIsMenuOpen(false)}>
                Men
              </Link>
              <Link to='/women' onClick={() => setIsMenuOpen(false)}>
                Women
              </Link>
              <Link to='/tech' onClick={() => setIsMenuOpen(false)}>
                Tech
              </Link>
              <Link to='/home' onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to='/beauty' onClick={() => setIsMenuOpen(false)}>
                Beauty
              </Link>
              <Link to='/accessories' onClick={() => setIsMenuOpen(false)}>
                Accessories
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
