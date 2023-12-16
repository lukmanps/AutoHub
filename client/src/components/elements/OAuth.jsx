import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../config/firebase.config';
import { handleOAuth } from '../../services/auth/auth.service';
import { useDispatch} from 'react-redux';
import {
    loginSuccess,
  } from '../../redux/user/userSlice';

const OAuth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleGoogleButton = async() => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app)

            const result = await signInWithPopup(auth, provider);

            const data = {
                username: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL
            }

            const response = await handleOAuth(data);
            if(response) {
                dispatch(loginSuccess(response));
                navigate('/');
            }
        } catch (error) {
            toast.error('Something went wrong!')
        }
    }
    return (
        <>
            <button 
            onClick={handleGoogleButton}
            className='bg-primary-dark font-medium text-slate-100 p-3 rounded-lg hover:opacity-80'>
                Continue With Google
            </button>
        </>
    )
}

export default OAuth;