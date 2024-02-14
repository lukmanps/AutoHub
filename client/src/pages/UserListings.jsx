import React, { useEffect, useState } from 'react'//
import { useSelector } from 'react-redux';
import fetchUserListings from '../services/listing/fetchUserListings.service';
import { MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const UserListings = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [listings, setListings] = useState([]);
    const [showOptions, setShowOptions] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetchUserListings(currentUser._id)
            .then((response) => {
                setListings(response);
            })
            .catch((error) => {
                console.log(error, "Eroor");
            })
    }, [listings]);

    const handleToggleOptions = (listingId) => {
        setShowOptions((prevOption) => ({
            ...prevOption,
            [listingId]: !prevOption[listingId]
        }));
    }

    const handleView = (listingId) => {
        navigate(`/listing/${listingId}`);
    }

    const handleEdit = (listingId) => {

    }

    const handleDelete = (listingId) => {

    }

    return (
        <div className='mt-8 max-w-sm md:max-w-6xl mx-auto px-5'>
            <h1 className='text-gray-800 text-2xl md:text-3xl font-bold text-left'>My Listings</h1>

            {listings.map((listing) => (
                <div className='bg-white my-8 h-32 rounded-xl p-3 hover:shadow-md flex items-center justify-evenly gap-3 border border-gray-200' key={listing._id}>
                    <div className='flex items-center gap-5 mr-auto'>
                        <img
                            src={listing.imageURLs[0]}
                            alt='Image'
                            className='w-35 h-20 object-cover rounded-md border border-gray-400'
                        />
                        <div>
                            <h3 className='font-medium text-base sm:text-lg self-start'>{listing.make + ' ' + listing.model}</h3>
                            <h3 className='text-xs'><span>Listed on</span> 29/01/2024</h3>
                        </div>
                    </div>

                    <div className='mx-auto hidden md:block'>
                        <h3 className='text-xs'>Fuel</h3>
                        <h3 className='font-medium ml-auto  md:text-base '>{listing.fuel}</h3>
                    </div>


                    <div className='mx-auto'>
                        <h3 className='font-medium text-base sm:text-lg'>&#8377;{listing.price}</h3>
                    </div>


                    <div className='relative'>
                        <button
                            className='bg-gray-100 rounded-lg p-2 text-gray-500 font-bold flex items-center gap-1 hover:bg-gray-200'
                            onClick={() => handleToggleOptions(listing._id)}>
                            <MoreHorizontal />
                        </button>

                        {showOptions[listing._id] && (
                            <div className='absolute z-10 top-8 right-0 bg-white border rounded-lg shadow-md'>
                                <button className='block w-full text-left py-2 px-4 hover:bg-gray-200' onClick={() => handleView(listing._id)}>
                                    View
                                </button>
                                <button className='block w-full text-left py-2 px-4 hover:bg-gray-200' onClick={() => handleEdit(listing._id)}>
                                    Edit
                                </button>
                                <button className='block w-full text-left py-2 px-4 text-red-700 hover:bg-gray-200' onClick={() => handleDelete(listing._id)}>
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )
            )}



        </div>
    )
}

export default UserListings