import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
      <div className='w-full max-w-md bg-white rounded-2xl shadow-lg p-8'>
        <h2 className='text-2xl font-bold text-center mb-6'>Create Account</h2>

        <form className='space-y-4'>
          <div>
            <label className='block text-sm font-medium mb-1'>Name</label>
            <input
              type='text'
              placeholder='John Doe'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>Email</label>
            <input
              type='email'
              placeholder='yourEmail@gmail.com'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>Password</label>
            <input
              type='password'
              placeholder='••••••••'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition'
          >
            Sign Up
          </button>
        </form>

        <p className='text-sm text-center mt-4 text-gray-600'>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
