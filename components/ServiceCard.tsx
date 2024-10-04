import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div
      className="p-6 rounded-xl shadow-md bg-white">
      <div className="mb-4 text-3xl">
        {icon}
      </div>
      
      <h3 className="text-lg font-semibold font-poppins text-[#ff3131]">
        {title}
      </h3>

      <p className="mt-2 text-sm font-poppins text-gray-600">
        {description}
      </p>

      <Link
        href="#"
        className="mt-4 inline-block text-sm font-poppins font-semibold text-black hover:text-[#ff3131]">
        Read More &rarr;
      </Link>
    </div>
  );
};

export default ServiceCard;
