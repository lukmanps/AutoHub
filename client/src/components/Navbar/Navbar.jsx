import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DropDownMenu from '../elements/DropDownMenu';


const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='bg-slate-100 shadow-md'>
      <div className='flex justify-between items-center max-w-sm px-6 py-2 sm:max-w-6xl mx-auto p-1'>
        <div>
          <Link to={'/'}>
            <h1 className='font-bold text-base md:text-lg flex flex-wrap'>
              <span className='text-slate-500'>Auto</span>
              <span className='text-secondary'>Hub</span>
            </h1>
          </Link>
        </div>

        <ul className='flex gap-5'>
          <li className='hidden lg:inline text-secondary'>Home</li>
          <li className='hidden lg:inline text-secondary'>About</li>
          <li className='hidden lg:inline text-secondary'>Contact</li>
        </ul>

        <div className='p-2'>
          <form className='bg-slate-200 p-3 rounded-lg flex items-center'>
            <input
              className='bg-transparent focus:outline-none w-14 sm:w-64'
              type='text'
              placeholder='Search...' />
            <FaSearch className='text-slate-500 cursor-pointer' />
          </form>
        </div>

        <div>
          { currentUser && 
          <Link to={'create-listing'}>
          <button className='bg-green-700 font-bold text-slate-50 rounded-lg px-6 py-2 hover:opacity-90'>Sell</button>
          </Link>
          }
        </div>

        <div className='flex gap-1'>
          {currentUser ?
            <DropDownMenu user={currentUser} /> :
            <Link to={'login'}>
              <button className='bg-gray-800 font-bold text-slate-50 rounded-lg px-6 py-2 hover:bg-light-gray'>
                Login</button>
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar;