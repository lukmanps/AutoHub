import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import handleProfileImageUpload from '../services/user/handleProfileImage.service';
import { updateUserInfo } from '../services/user/updateUserInfo.service';
import { updateSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';


const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [error, setError] = useState(null); //Form Error
  const [file, setFile] = useState(undefined); //Uploading File
  const [filePerc, setFilePerc] = useState(0); //Uploading File Percent
  const [fileError, setFileError] = useState(false); //Upload File Error
  const fileRef = useRef(null);
  const [formData, setFormData] = useState({});
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (file) {
      handleProfileImageUpload(file,
        setFilePerc,
        setFileError,
        formData,
        setFormData
      );
    }
  }, [file]);

  const onSubmit = async (data) => {
    const updatedData = {
      email: currentUser.email,
      username: data.username,
      phoneNumber: data?.phoneNumber,
      profileImage: formData?.profileImage
    }

    try {
      const response = await updateUserInfo(updatedData, currentUser._id);
      toast.success('User Information Updated!');
      dispatch(updateSuccess(response));
    } catch (error) {
      toast.error("Couldn't Update, try again later!");
    }

  }

  return (
    <>
      <div className='my-10'>
        <div className='text-center py-4'>
          <h1 className='text-gray-800 text-3xl font-bold'>Profile</h1>
        </div>

        <div className='max-w-xs sm:max-w-sm mx-auto'>
          <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
            <div className='self-center'>
              <img
                src={formData.profileImage || currentUser.profileImage}
                alt='Profile Image'
                className='rounded-full h-24 w-24 object-cover cursor-pointer'
                onClick={() => fileRef.current.click()} />

            </div>
            <p className='text-sm self-center mb-2 mt-0'>
              {fileError ? (
                <span className='text-red-700'>Image upload failed.</span>
              ) : filePerc > 0 && filePerc < 100 ? (
                <span>{`Uploading ${filePerc}%`}</span>
              ) : (filePerc === 100 ? (
                <span className='text-green-700'>Successfully Uploaded</span>
              ) : " ")}
            </p>

            <input
              onChange={(e) => setFile(e.target.files[0])}
              type='file'
              ref={fileRef}
              hidden accept='image/*' />

            <p className='text-xs'>Username</p>
            <input
              className='shadow-sm  p-3 rounded-lg focus:shadow-lg outline-none'
              id='username'
              defaultValue={currentUser.username}
              type='text'
              placeholder='Username'
              {...register('username', {
                required: true,
                pattern: /^[a-zA-Z0-9_-]{3,16}$/
              })} />
            {errors.username && <p className='text-red-700 text-sm'>Invalid Username</p>}


            <p className='text-xs'>Email</p>
            <input
              className='shadow-sm  p-3 rounded-lg focus:shadow-lg outline-none'
              id='email'
              defaultValue={currentUser.email}
              type='text'
              placeholder='Email'
              disabled />

            <p className='text-xs'>Phone Number</p>
            <input
              className='shadow-sm  p-3 rounded-lg focus:shadow-lg outline-none'
              id='phoneNumber'
              defaultValue={currentUser?.phoneNumber}
              type='tel'
              placeholder='Phone Number'
              {...register('phoneNumber', {
                required: true,
                minLength: 10,
                maxLength: 10
              })} />
            {errors.phoneNumber && <p className='text-red-700 text-sm'>Invalid Phone Number</p>}


            {error && <p className='text-primary-dark text-sm'>{error}</p>}
            <button
              className='bg-gray-700 py-3 mt-3 text-slate-100 font-medium rounded-lg hover:opacity-90'
              type='submit'
            >Update</button>

          </form>
          <div className='flex justify-between mt-3'>
            <span>Delete</span>
            <span>Logout</span>
          </div>

        </div>

      </div>
    </>

  )
}

export default Profile;