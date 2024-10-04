import Image from 'next/image';
import { FaStar } from "react-icons/fa";

interface HotelCardProps {
  image: string;
  name: string;
  location: string;
  stars: number;
}

const HotelCard: React.FC<HotelCardProps> = ({ image, name, location, stars }) => {
  return (
    <div className="flex flex-col font-poppins w-full sm:w-[100] bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
      
      <div className="relative w-full h-40">
        <Image src={image} alt={name} layout="fill" objectFit="cover" />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 hover:text-[#ff3131]">{name}</h3>
        <p className="text-sm text-gray-500">{location}</p>
      
        <div className="mt-2 flex">
          {Array(stars).fill(null).map((_,i) => (
            <FaStar key={i} className="w-4 h-4 text-red-500"/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
