import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchListing from '../services/listing/fetchListing.service';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

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
    <>
      <div>Listing</div>
      {loading && <p className='font-medium text-base text-center'>Loading...</p>}

      <Swiper navigation>
        {listing && listing?.imageURLs.map((url) => (
          <SwiperSlide key={url}>
            <div className='h-44' style={{ background: `url(${url}) center no-repeat`, backgroundSize: 'contain' }}>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>

    </>
  )
}

export default Listing;