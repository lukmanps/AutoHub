import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { handleLogin } from '../services/auth/auth.service';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginStart, 
  loginSuccess, 
  loginFailed
} from '../redux/user/userSlice'

const Login = () => {
  const { loading, error } = useSelector((state) => state.user);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    dispatch(loginStart());
    try {
      const response = await handleLogin(data);
      if ( response ) {
        dispatch(loginSuccess(response))
        navigate('/');
      }
    } catch (error) {
      dispatch(loginFailed(error));
    }
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
            })} />
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
            error={Boolean(errors.password)} />
          {errors.password && <p className='text-primary-dark text-sm'>{errors.password.message}</p>}

          {error && <p className='text-primary-dark text-center text-sm'>{error}</p>}

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