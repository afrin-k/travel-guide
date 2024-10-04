"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HotelCard from './HotelCard';
import { Autoplay } from 'swiper/modules';

const hotels = [
  { id: 1, name: 'Al Olayan Haram', location: 'Jeddah', stars: 4, image: '/hotels1.png' },
  { id: 2, name: 'Swissotel Makkah', location: 'Makkah', stars: 5, image: '/hotels2.png' },
  { id: 3, name: 'Makkah Hotel-Ex Hilton', location: 'Makkah', stars: 5, image: '/hotels3.png' },
  { id: 4, name: 'Swissotel Al Maqam', location: 'Jeddah', stars: 3, image: '/hotels4.jpg' },
  { id: 5, name: 'Palm Jumeirah', location: 'Abu Dhabi', stars: 5, image: '/hotels5.jpg' },
];

const Hotels = () => {
  return (
    <div className="h-[90vh] mx-auto pt-12 px-6 sm:px-12">
      <h1 className="font-poppins text-5xl font-bold w-[330px] md:w-[600px] text-gray-900 pt-16 pb-20 text-center mx-auto">Great Offers & Deals</h1>  
      
      <Swiper spaceBetween={15} loop={true} slidesPerView={4} autoplay={{ delay: 3000, disableOnInteraction: false }} speed={1000} modules={[Autoplay]} breakpoints={{0: {slidesPerView: 1,},640: {slidesPerView: 2,},768: {slidesPerView: 3,},1024: {slidesPerView: 4,},}} className="pb-6">
        {hotels.map((hotel) => (
          <SwiperSlide key={hotel.id}>
            <HotelCard 
              name={hotel.name}
              location={hotel.location}
              stars={hotel.stars}
              image={hotel.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hotels;
