import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>

      <div className='text-center my-8'>
        <h1 className='text-secondary text-3xl font-bold '>Register</h1>
        <span className='text-light-gray font-normal'>Already have an account?</span>
        <Link to={'/login'}>
          <span className='hover: text-slate-800'> Login</span>
        </Link>
      </div>

      <div className='max-w-xs sm:max-w-sm mx-auto'>
        <form className='flex flex-col gap-3'>
          <input
            className='shadow-sm  p-3 rounded-lg focus:shadow-lg outline-none'
            id='username'
            type='text'
            placeholder='Username' />

          <input
            className='shadow-sm  p-3 rounded-lg focus:shadow-lg outline-none'
            id='email'
            type='text'
            placeholder='Email' />

          <input
            className='shadow-sm  p-3 rounded-lg focus:shadow-lg outline-none'
            id='phoneNo'
            type='tel'
            placeholder='Phone Number' />

          <input
            className='shadow-sm  p-3 rounded-lg focus:shadow-lg outline-none'
            id='password'
            type='password'
            placeholder='Password' />

          <input
            className='shadow-sm  p-3 rounded-lg focus:shadow-lg outline-none'
            id='confirm-password'
            type='password'
            placeholder='Confirm Password' />

          <button className='bg-secondary py-3 my-3 text-slate-100 font-medium rounded-lg hover:opacity-90'>Signup</button>
        </form>
      </div>

    </div>
  )
}

export default Signup;