import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { handleRegister } from '../services/auth/auth.service';
import toast from 'react-hot-toast'

const Login = () => {
  const [loading, setLoading] = useState(false);
  const {register, handleSubmit, formState: {errors}, getValues} = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div>
      <div className='text-center my-10'>
        <h1 className='text-secondary text-3xl font-bold '>Welcome Back!</h1>
        <span className='text-light-gray font-normal'>Don't have an account?</span>
        <Link to={'/register'}>
          <span className='hover: text-slate-800'> Register</span>
        </Link>
      </div>

      <div className='max-w-xs sm:max-w-sm mx-auto'>
        <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>

          <input
            className='shadow-sm  p-3 rounded-lg focus:shadow-lg outline-none'
            id='email'
            type='text'
            placeholder='Email' 
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            })}/>
            {errors.email && <p className='text-primary-dark text-sm'>Invalid Email</p>}

          

          <input
            className='shadow-sm  p-3 rounded-lg focus:shadow-lg outline-none'
            id='password'
            type='password'
            placeholder='Password'
            {...register('password', {
              required: 'Invalid Password',
              minLength: {
                value: 6,
                message: 'Password should contain atleast 6 characters'
              }
            })} 
            error = {Boolean(errors.password)}/>
            {errors.password && <p className='text-primary-dark text-sm'>{errors.password.message}</p>}
            

      
          <button 
          disabled={loading}
          className='bg-secondary py-3 my-3 text-slate-100 font-medium rounded-lg hover:opacity-90'
          type='submit'
          >{loading ? 'Loading...' : 'Login'}</button>
        </form>
      </div>

    </div>
  )
}

export default Login;