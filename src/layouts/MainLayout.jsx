import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Outlet } from 'react-router-dom';
import SearchBar from '../components/SearchBar.jsx';

function MainLayout({ products }) {
  return (
    <div className='min-h-screen w-full flex flex-col'>
      <Header />
      <SearchBar products={products} />

      <main className='grow bg-blue-300'>
        <Outlet context={{ products }} />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
