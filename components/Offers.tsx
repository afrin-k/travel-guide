"use client";
import { useState } from "react";
import OfferCard from "./OfferCard";
import Tabs from "./Tabs";
// Sample offer data

const offers = [
  {
    id: 1,
    image: "/flight1.png", 
    category: "Flight",
    title: "Get Up To 30% Off on International Flights",
    description: "Book now for special fare!",
  },
  {
    id: 2,
    image: "/flight2.png", 
    category: "Flight",
    title: "Up to ₹5,000 OFF* on Flights to Middle East",
    description: "With our super-saver sale!",
  },
  {
    id: 3,
    image: "/flight3.png", 
    category: "Flight",
    title: "Fly to Jeddah On Umrah Fare SV",
    description: "Umrah Group Fare SV Block - T&C apply!",
  },
  {
    id: 4,
    image: "/flight4.png", 
    category: "Flight",
    title: "Get Up To 35% Off On Domestic Flights",
    description: "Book now for special rates!",
  },
  {
    id: 1,
    image: "/hotel1.jpg", 
    category: "Hotel",
    title: "GRAB NOW : FLAT 12% OFF*",
    description: "With our super-saver sale!",
  },
  {
    id: 2,
    image: "/hotel2.jpg", 
    category: "Hotel",
    title: "Up to 30% OFF* On Domestic Hotels",
    description: "Participate in our super-saver Feb sale - T&C apply!",
  },
  {
    id: 3,
    image: "/hotel3.jpg", 
    category: "Hotel",
    title: "Up to 30% OFF* On International Hotels",
    description: "With our super-saver Feb sale!",
  },
  {
    id: 4,
    image: "/hotel4.jpeg", 
    category: "Hotel",
    title: "LIVE NOW : Super-Saver Feb Sale",
    description: "Grab up to 35% off on hotel stays - T&C apply!",
  },
  {
    id: 1,
    image: "/bus.jpeg", 
    category: "Bus",
    title: "Find The Best Bus Deals",
    description: "Contact us for the best deals on bus tickets!",
  },
  {
    id: 1,
    image: "/visa.jpg", 
    category: "Visa",
    title: "Get Your Visas Easily",
    description: "Find the support you need for your visa application!",
  },
];

const OffersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Flight");

  const filteredOffers = offers.filter((offer) => offer.category === selectedCategory);

  return (
    <div className="h-fit mx-auto p-4">
      <h1 className="font-poppins text-5xl font-bold w-[330px] md:w-[600px] text-gray-900 pt-16 pb-10 text-center mx-auto">Great Offers & Deals</h1>  
      <Tabs selectedCategory={selectedCategory} onTabChange={setSelectedCategory} />
      <div className="px-2 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredOffers.map((offer) => (
          <OfferCard 
            key={offer.id}
            image={offer.image} 
            category={offer.category}
            title={offer.title}
            description={offer.description} 
          />
        ))}
      </div>
    </div>
  );
}

export default OffersPage;
