import React from 'react';
import { MdTour, MdFlight, MdTrain } from "react-icons/md";
import { FaMoon, FaHotel, FaPassport } from 'react-icons/fa';
import ServiceCard from './ServiceCard';

const cardData = [
  {
    title: 'Tour Packages',
    icon: <MdTour/>,
    description: 'Explore the best of global destinations with tailored tour packages. Whether it is a family vacation or a solo adventure we offer experiences that suit every traveler.',
  },
  {
    title: 'Flight Tickets',
    icon: <MdFlight/>,
    description: 'Book your flight tickets hassle-free with exclusive deals and round-the-clock customer support. We offer tickets for all major airlines.',
  },
  {
    title: 'Train Tickets',
    icon: <MdTrain/>,
    description: 'Book train tickets for all major destinations, with easy booking and real-time seat availability.',
  },
  {
    title: 'Hajj & Umrah',
    icon: <FaMoon/>,
    description: 'Specialized packages for a spiritual journey to Mecca. Let us assist you with every step of your pilgrimage.',
  },
  {
    title: 'Hotel Booking',
    icon: <FaHotel/>,
    description: 'From luxury hotels to budget stays, find the perfect place to rest during your travels. We offer a wide range of accommodations globally.',
  },
  {
    title: 'Passport & Visa Assistance',
    icon: <FaPassport/>,
    description: 'Let us handle the paperwork while you plan your trip. We offer complete assistance with passport applications and visa processing.',
  },
];

const Services = () => {
  return (
    <div className="h-screen bg-gray-50 py-10 overflow-x-hidden">
      <div className="container mx-auto px-4">
          <h1 className="font-poppins text-5xl font-bold w-[330px] md:w-[600px] text-gray-900 py-10 text-center mx-auto">Our Services</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
            <ServiceCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services
