"use client";

const categories = ["Flight", "Hotel", "Bus", "Visa"];

const Tabs = ({ selectedCategory, onTabChange }: { selectedCategory: string, onTabChange: (category: string) => void }) => {
  return (
    <div className="px-2 sm:px-10 flex space-x-4 mb-6">
      {categories.map((category) => (
        <button 
          key={category} 
          className={`font-poppins text-base font-semibold py-1 px-4 rounded-full ${
            selectedCategory === category ? "bg-blue-100 text-gray-900" : "text-gray-500"
        }`}
          onClick={() => onTabChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
