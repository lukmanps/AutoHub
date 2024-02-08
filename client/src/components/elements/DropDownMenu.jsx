import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { FaUserCog, FaSignOutAlt, FaRegSun, FaClipboardCheck } from 'react-icons/fa';
import { signOut } from '../../services/auth/signout.service';
import { signOutSuccess } from '../../redux/user/userSlice';
import { useDispatch } from 'react-redux'


const DropDownMenu = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggling = () => {
        setIsOpen(!isOpen);
    }

    const handleSignout = async() => {
        const response = await signOut();
        if(response){
            dispatch(signOutSuccess());
            navigate('/');
        }
    }

    return (
        <>
            <div className='relative cursor-pointer'>
                <div className='flex items-center gap-0' onClick={toggling}>
                    <img src={user.profileImage}
                        alt='profile'
                        className='rounded-full h-12 w-12 object-cover md:{h-8 w-8}' />
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                </div>

                {isOpen &&
                    <div className='absolute flex-col p-3 rounded-md bg-gray-200 mt-2'>
                        <div className="px-4 py-3 text-sm text-secondary">
                            <div>{user.username}</div>
                            <div className="font-medium truncate">{user.email}</div>
                        </div>
                        <ul className="py-2 text-sm text-secondary rounded-lg" aria-labelledby="dropdownInformationButton">
                            <li className='flex items-center rounded-lg px-3 hover:bg-gray-300'>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-300">Dashboard</a>
                            </li>
                            <li className='flex items-center rounded-lg px-3 hover:bg-gray-300'>
                                <FaUserCog />
                                <Link className="block px-4 py-2" to={'profile'}>Profile</Link>
                            </li>
                            <li className='flex items-center rounded-lg px-3 hover:bg-gray-300'>
                                <FaClipboardCheck />
                                <Link className="block px-4 py-2" to={'user-listing'}>My Listings</Link>
                            </li>
                            <li className='flex items-center rounded-lg px-3 hover:bg-gray-300'>
                                <FaRegSun />
                                <a href="#" className="block px-4 py-2">Settings</a>
                            </li>
                        </ul>
                        <div className="py-2 px-3 flex items-center rounded-lg hover:bg-gray-300">
                            <FaSignOutAlt />
                            <p onClick={handleSignout} className="block px-4 py-2 text-sm font-medium text-primary-dark cursor-pointer">Sign out</p>
                        </div>
                    </div>}



                {/* Dropdown menu */}

            </div>
        </>
    )
}

export default DropDownMenu