import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <header className='bg-slate-100 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-1 '>
        <div>
          <Link to={'/'}>
            <h1 className='font-bold text-lg sm:text-xl flex flex-wrap'>
              <span className='text-primary-normal'>Auto</span>
              <span className='text-secondary'>Hub</span>
            </h1>
          </Link>
        </div>

        <ul className='flex gap-4'>
          <li className='hidden sm:inline text-secondary'>Home</li>
          <li className='hidden sm:inline text-secondary'>About</li>
          <li className='hidden sm:inline text-secondary'>Contact</li>
        </ul>

        <div className='p-2'>
          <form className='bg-slate-200 p-3 rounded-lg flex items-center'>
            <input
              className='bg-transparent focus:outline-none w-24 sm:w-64'
              type='text'
              placeholder='Search...' />
            <FaSearch className='text-slate-500 cursor-pointer' />
          </form>
        </div>

        <div>
          <Link to={'login'}>
            <button className='bg-primary-normal font-bold text-slate-50 rounded-full px-6 py-2 hover:bg-primary-dark'>
              Login</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar;