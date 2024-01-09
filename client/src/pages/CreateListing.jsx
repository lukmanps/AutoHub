import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import storeImage from '../services/listing/imageUpload.service';

const CreateListing = () => {
  const [files, setFiles] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [imageUploadError, setImageUploadError] = useState('');
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + imageURLs.length < 7) {
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]))
      }

      console.log(promises, ' :: Promises');

      Promise.all(promises)
        .then((urls) => {
          console.log(urls)
          imageURLs.push(urls);
          console.log(imageURLs);
        }).catch((error) => {
          console.log(error);
          setImageUploadError('Image Upload Failed!')
        });
    } else {
      setImageUploadError('Can upload only 6 Images')
    }
  }

  const onSubmit = (data) => {
    const formData = {
      ...data,
      imageURLs
    }

    console.log(formData);
  }
  return (
    <main className='p-6 max-w-sm sm:max-w-4xl mx-auto'>
      <div className='py-3 mb-8'>
        <h1 className='text-gray-800 text-3xl font-bold text-left'>Create New Listing.</h1>
      </div>

      <div >
        <form className='flex flex-col sm:flex-row gap-6' onSubmit={handleSubmit(onSubmit)}>

          <div className='flex flex-col flex-1 gap-3'>
            <div>
              <p className='font-normal text-sm mb-1'>Model</p>
              <input id='model' type='text' placeholder='Model' className='border shadow-sm p-3 w-full rounded-lg focus:shadow-md outline-none'
                {...register('model', {
                  required: true
                })} />
              {errors.model && <p className='text-red-700 text-sm'>Field Required</p>}
            </div>
            <div className='flex flex-row gap-2'>
              <div>
                <p className='font-normal text-sm mb-1'>Make</p>
                <input id='make' type='text' placeholder='Make' className='border shadow-sm p-3 w-full rounded-lg focus:shadow-md outline-none'
                  {...register('make', {
                    required: true
                  })} />
                {errors.make && <p className='text-red-700 text-sm'>Field Required</p>}
              </div>
              <div>
                <p className='font-normal text-sm mb-1'>Year</p>
                <input id='year' type='number' placeholder='Year' className='border shadow-sm p-3 w-full rounded-lg focus:shadow-md outline-none'
                  {...register('year', {
                    required: 'Field Required',
                    min: {
                      value: 2000,
                      message: 'Year must be greater than or equal to 2000',
                    },
                    max: {
                      value: 2023,
                      message: 'Year must be less than or equal to 2023',
                    },
                  })} />
                {errors.year && <p className='text-red-700 text-sm'>{errors.year.message}</p>}
              </div>
            </div>
            <div>
              <div>
                <p className='font-normal text-sm mb-1'>Description</p>
                <textarea id='description' type='text' rows={5} placeholder='Description' className='border shadow-sm p-3 rounded-lg focus:shadow-md outline-none w-full'
                  {...register('description', {
                    required: true
                  })} />
                {errors.description && <p className='text-red-700 text-sm'>Field Required</p>}
              </div>
            </div>
            <p>Fuel Type</p>
            <div className='flex gap-5'>
              <label className='text-lg font-medium'><input id='fuel' type='radio' name='fuel' value='Petrol' {...register('fuel', { required: true })} /> Petrol</label>
              <label className='text-lg font-medium'><input id='fuel' type='radio' name='fuel' value='Diesel' {...register('fuel', { required: true })} /> Diesel</label>
              {errors.fuel && <p className='text-red-700 text-sm'>Field Required</p>}
            </div>
            <div>
              <p className='font-normal text-sm mb-1'>Body Type</p>
              <select id='bodyType' className='border shadow-sm p-3 w-full rounded-lg focus:shadow-md outline-none' name='bodyType'
                {...register('bodyType', {
                  required: true
                })}>
                <option selected disabled>Select Option</option>
                <option value='SUV'>SUV</option>
                <option value='MUV'>MUV</option>
                <option value='Sedan'>Sedan</option>
                <option value='HatchBack'>HatchBack</option>
              </select>
              {errors.bodyType && <p className='text-red-700 text-sm'>Field Required</p>}
            </div>
          </div>

          <div className='flex flex-col flex-1 gap-3'>
            <p className='font-semibold text-base'>Images:
              <span className='text-sm text-gray-600 ml-2 font-normal'> The first image will be the cover (max 6)</span>
            </p>

            <div className='flex gap-3'>
              <input onChange={(e) => setFiles(e.target.files)} className='border bg-gray-200 p-3 rounded-lg w-full' type='file' id='images' accept='image/*' multiple />
              <button type='button' onClick={handleImageSubmit} className='text-green-700 border border-green-700 p-3 rounded-md uppercase hover:shadow-lg'>Upload</button>
            </div>

            {imageUploadError && <p className='text-red-700 text-sm'>{imageUploadError}</p>}

            {imageURLs.length > 0 && imageURLs.map((url) => {
              <div className='flex justify-between p-3 border rounded-lg items-center'>
                <img src={url} alt='Listing Image' className='w-25 h-20 object-contain rounded-md border border-gray-400' />
                <button className='border border-red-700 px-2 py-1 text-sm rounded-lg hover:shadow-md'>Delete</button>
              </div>
            })}

            <div>
              <p className='font-normal text-sm mb-1'>Price</p>
              <input id='price' type='number' placeholder='Price' className='border shadow-sm p-3 w-full rounded-lg focus:shadow-md outline-none'
                {...register('price', {
                  required: true
                })} />
              {errors.price && <p className='text-red-700 text-sm'>Field Required</p>}
            </div>

            <div>
              <p className='font-normal text-sm mb-1'>Location</p>
              <input id='location' type='text' placeholder='Location' className='border shadow-sm p-3 w-full rounded-lg focus:shadow-md outline-none'
                {...register('location', { required: true })} />
              {errors.location && <p className='text-red-700 text-sm'>Field Required</p>}
            </div>

            <button type='submit' className='bg-gray-800 p-3 mt-3 text-slate-50 rounded-md uppercase hover:opacity-90 disabled:opacity-75'>Create</button>
          </div>

        </form>
      </div>
    </main>
  )
}

export default CreateListing