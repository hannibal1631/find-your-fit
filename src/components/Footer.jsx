import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faRedditAlien,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-blue-600 text-white'>
      {/* MAIN CONTENT */}
      <div className='max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-4 gap-10'>
        {/* Logo + Socials */}
        <div>
          <h1 className='text-2xl font-bold mb-3'>Find Your Fit</h1>
          <p className='leading-6 mb-6'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>

          <ul className='flex gap-5'>
            <li className='cursor-pointer hover:scale-110 transition'>
              <FontAwesomeIcon icon={faFacebook} size='2xl' />
            </li>
            <li className='cursor-pointer hover:scale-110 transition'>
              <FontAwesomeIcon icon={faInstagram} size='2xl' />
            </li>
            <li className='cursor-pointer hover:scale-110 transition'>
              <FontAwesomeIcon icon={faXTwitter} size='2xl' />
            </li>
            <li className='cursor-pointer hover:scale-110 transition'>
              <FontAwesomeIcon icon={faRedditAlien} size='2xl' />
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className='text-xl font-semibold underline mb-2'>Company</h2>
          <div className='flex flex-col gap-2'>
            <a
              href='#'
              className='hover:text-green-300 hover:underline transition'
            >
              About
            </a>
            <a
              href='#'
              className='hover:text-green-300 hover:underline transition'
            >
              Features
            </a>
            <a
              href='#'
              className='hover:text-green-300 hover:underline transition'
            >
              Works
            </a>
            <a
              href='#'
              className='hover:text-green-300 hover:underline transition'
            >
              Career
            </a>
          </div>
        </div>

        {/* Help */}
        <div>
          <h2 className='text-xl font-semibold underline mb-2'>Help</h2>
          <div className='flex flex-col gap-2'>
            <a
              href='#'
              className='hover:text-green-300 hover:underline transition'
            >
              Customer Support
            </a>
            <a
              href='#'
              className='hover:text-green-300 hover:underline transition'
            >
              Delivery Details
            </a>
            <a
              href='#'
              className='hover:text-green-300 hover:underline transition'
            >
              Terms & Conditions
            </a>
            <a
              href='#'
              className='hover:text-green-300 hover:underline transition'
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className='flex flex-col justify-center'>
          <h2 className='text-xl font-semibold underline mb-2'>
            Subscribe to Newsletter
          </h2>

          <input
            type='email'
            className='border border-black bg-white p-2 w-full rounded-md text-black'
            placeholder='yourEmail@email.com'
          />

          <button
            type='submit'
            className='w-full bg-black h-[50px] mt-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:duration-500 before:ease-in-out hover:before:left-0 before:z-[-1] text-white'
          >
            Subscribe
          </button>
          <Link
              to='/signup'
              className='w-full bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-white'
            >
              Sign Up / Login
          </Link>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className='w-full'>
        <div className='max-w-7xl mx-auto border-t border-white opacity-40'></div>
      </div>

      <p className='text-center py-4 text-sm opacity-70'>
        © 2025 FindYourFit. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faFacebook,
//   faInstagram,
//   faXTwitter,
//   faRedditAlien,
// } from '@fortawesome/free-brands-svg-icons';

// function Footer() {
//   return (
//     <footer className='bg-blue-600 flex flex-col'>
//       <div className='h-70 max-w-7xl mx-auto px-5 py-5 flex justify-evenly gap-3'>
//         {/* logo and socials */}
//         <div className='w-1/4'>
//           <h1>Find Your Fit</h1>
//           <p className='leading-5 text-base mb-5'>
//             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
//             sint. Velit officia consequat duis enim velit mollit.
//           </p>
//           <ul className='flex flex-row justify-between'>
//             <li className='cursor-pointer hover:scale-115'>
//               <FontAwesomeIcon icon={faFacebook} size='2xl' />
//             </li>
//             <li className='cursor-pointer hover:scale-115'>
//               <FontAwesomeIcon icon={faInstagram} size='2xl' />
//             </li>
//             <li className='cursor-pointer hover:scale-115'>
//               <FontAwesomeIcon icon={faXTwitter} size='2xl' />
//             </li>
//             <li className='cursor-pointer hover:scale-115'>
//               <FontAwesomeIcon icon={faRedditAlien} size='2xl' />
//             </li>
//           </ul>
//         </div>
//         {/* company links */}
//         <div className='w-1/6'>
//           <h2 className='text-xl font-semibold underline mb-1'>Company</h2>
//           <div className='flex flex-col'>
//             <a
//               href='#'
//               className='hover:text-green-300 transition-all duration-200 hover:underline'
//             >
//               About
//             </a>
//             <a
//               href='#'
//               className='hover:text-green-300 transition-all duration-200 hover:underline'
//             >
//               Features
//             </a>
//             <a
//               href='#'
//               className='hover:text-green-300 transition-all duration-200 hover:underline'
//             >
//               Works
//             </a>
//             <a
//               href='#'
//               className='hover:text-green-300 transition-all duration-200 hover:underline'
//             >
//               Career
//             </a>
//           </div>
//         </div>
//         {/* help links */}
//         <div className='w-1/6'>
//           <h2 className='text-xl font-semibold underline mb-1'>Help</h2>
//           <div className='flex flex-col '>
//             <a
//               href='#'
//               className='hover:text-green-300 transition-all duration-200 hover:underline'
//             >
//               Customer Support
//             </a>
//             <a
//               href='#'
//               className='hover:text-green-300 transition-all duration-200 hover:underline'
//             >
//               Delivery Details
//             </a>
//             <a
//               href='#'
//               className='hover:text-green-300 transition-all duration-200 hover:underline'
//             >
//               Terms & Conditions
//             </a>
//             <a
//               href='#'
//               className='hover:text-green-300 transition-all duration-200 hover:underline'
//             >
//               Privacy Policy
//             </a>
//           </div>
//         </div>
//         {/* newsletter */}
//         <div className='w-1/4'>
//           <h2 className='text-xl font-semibold underline mb-1'>
//             Subscribe to Newsletter
//           </h2>
//           <input
//             type='email'
//             name=''
//             id=''
//             className='border border-black bg-white p-2 w-full rounded-md'
//             placeholder='yourEmail@email.com'
//           />
//           <button
//             type='submit'
//             className='w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-white'
//           >
//             Subscribe
//           </button>
//         </div>
//       </div>
//       <div className='max-w-7xl border-t mb-5'></div>
//     </footer>
//   );
// }

// export default Footer;
