import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { handleRegister } from '../services/auth/auth.service';
import toast from 'react-hot-toast';
import OAuth from '../components/OAuth/OAuth';

const Signup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await handleRegister(data);
      if (response) {
        toast.success('Registered Successfully');
        navigate('/login');
        setLoading(false);
      }
    } catch (err) {
      console.log(err)
      setLoading(false);
      setError(err.data.message);
    }
  }
  return (
    <div>
      <div className='text-center my-8'>
        <h1 className='text-gray-800 text-3xl font-bold'>Register</h1>
        <span className='text-gray-600 font-normal'>Already have an account?</span>
        <Link to={'/login'}>
          <span className='hover: text-slate-800'> Login</span>
        </Link>
      </div>

      <div className='max-w-xs sm:max-w-sm mx-auto'>
        <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
          <input
            className='shadow-sm  p-3 rounded-lg focus:shadow-lg outline-none'
            id='username'
            type='text'
            placeholder='Username'
            {...register('username', {
              required: true,
              pattern: /^[a-zA-Z0-9_-]{3,16}$/
            })} />
          {errors.username && <p className='text-red-700 text-sm'>Invalid Username</p>}

          <input
            className='shadow-sm  p-3 rounded-lg focus:shadow-lg outline-none'
            id='email'
            type='text'
            placeholder='Email'
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            })} />
          {errors.email && <p className='text-red-700 text-sm'>Invalid Email</p>}

          <input
            className='shadow-sm  p-3 rounded-lg focus:shadow-lg outline-none'
            id='phoneNumber'
            type='tel'
            placeholder='Phone Number'
            {...register('phoneNumber', {
              required: true,
              minLength: 10
            })} />
          {errors.phoneNumber && <p className='text-red-700 text-sm'>Invalid Phone Number</p>}

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
          {errors.password && <p className='text-red-700 text-sm'>{errors.password.message}</p>}


          <input
            className='shadow-sm  p-3 rounded-lg focus:shadow-lg outline-none'
            id='confirmPassword'
            type='password'
            placeholder='Confirm Password'
            {...register('confirmPassword', {
              required: true,
              validate: (value) => (value) === getValues('password') || 'Password does not match'
            })}
            error={Boolean(errors.confirmPassword)} />
          {errors.confirmPassword && <p className='text-red-700 text-sm'>{errors.confirmPassword.message}</p>}

          {error && <p className='text-red-700 text-sm text-center'>{error}</p>}
          <button
            disabled={loading}
            className='bg-gray-900 py-3 mt-3 text-slate-100 font-medium rounded-lg hover:opacity-90'
            type='submit'
          >{loading ? 'Loading...' : 'Signup'}</button>
          
        </form>

        <div className='flex flex-col justify-center text-center gap-2'>
          <p>or</p>
          <OAuth />
        </div>
      </div>

    </div>
  )
}

export default Signup;