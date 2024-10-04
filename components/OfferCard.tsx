"use client";
import Image from 'next/image';

interface OfferCardProps {
    image: string,
    category: string;
    title: string;
    description: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ image,category, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg shadow-md">
      
      <div className="relative w-full sm:w-[40%] h-48">
        <Image 
          src={image}
          alt={title} 
          layout="fill" 
          objectFit="cover"
          className="rounded-lg md:rounded-r-none" 
        />
      </div>
      
      <div className="p-4 flex flex-col font-poppins justify-center space-y-2">
        <span className="text-sm text-gray-500">{category}</span>
        <h3 className="text-lg font-semibold hover:text-[#ff3131]">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    
    </div>
  );
}

export default OfferCard;
