import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchListing from '../services/listing/fetchListing.service';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import { MapPin, Fuel, CalendarFold, Car } from 'lucide-react';
import { timeAgo } from '../services/timeAgo.service';


const Listing = () => {
  const params = useParams();
  const [listing, setListing] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchListing(params.id)
      .then((data) => {
        setListing(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      })
  }, []);

  console.log(listing, " :Listing");
  return (
    <div className='mt-8 max-w-xs md:max-w-6xl mx-auto'>
      {loading && <p className='font-medium text-base text-center'>Loading...</p>}

      <Swiper navigation className='border border-gray-300 bg-white rounded-2xl'>
        {listing && listing?.imageURLs.map((url) => (
          <SwiperSlide key={url}>
            {/* <img src={url} className='object-fill h-56 justify-center' /> */}
            <div className='h-44 md:h-72' style={{ background: `url(${url}) center no-repeat`, backgroundSize: 'contain', borderRadius: '20px' }}></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='my-5 flex flex-col gap-2 px-3'>
        <span className='text-sm'>{timeAgo(listing.createdAt)}</span>
        <div className='flex flex-col gap-2 md:flex-row md:justify-between '>
          <h1 className='font-semibold text-3xl'>{listing.make + ' ' + listing.model}</h1>
          <h1 className='font-bold text-lg md:text-2xl'>&#8377;{listing.price}</h1>
        </div>
        <div className='flex gap-5'>
          <div className='border border-gray-300 text-sm bg-pink-200 p-1 rounded-lg flex gap-2'>
            <CalendarFold />
            <p>{listing.year}</p>
          </div>

          <div className='border border-gray-300 text-sm bg-green-200 p-1 rounded-lg flex gap-2'>
            <Fuel />
            <p>{listing.fuel}</p>
          </div>

          <div className='border border-gray-300 text-sm p-1 bg-blue-200 rounded-lg flex gap-2'>
            <Car />
            <p>{listing.bodyType}</p>
          </div>
        </div>
        <p className='text-lg'>{listing.description}</p>
        <span className='flex align-middle text-xs'><MapPin height={20} />{listing.location}</span>
      </div>
    </div>
  )
}

export default Listing;