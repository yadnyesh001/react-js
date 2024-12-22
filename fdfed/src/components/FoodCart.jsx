import React from "react";

const FoodCard = () => {
  return (
    <div className="flex items-start bg-white shadow-md rounded-lg p-4 w-96">
      {/* Image Section */}
      <img
        src="path-to-food-image.jpg"
        alt="Ultimate Loaded Nacho"
        className="w-20 h-20 rounded-lg object-cover"
      />

      {/* Details Section */}
      <div className="flex flex-col flex-grow ml-4">
        {/* Title and Ratings */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-gray-800 truncate">
              Ultimate Loaded Nacho Fi...
            </h2>
            <div className="flex items-center text-sm text-gray-500">
              <span className="text-green-500">&#9679;</span>
              <span className="ml-1">1k+ Ratings</span>
            </div>
          </div>
          <span className="text-lg font-bold text-orange-500">$40</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2">
          Nacho typically consists of layers of crispy tortilla chips topped
          wit...
        </p>
      </div>

      {/* Add Button */}
      <div className="flex items-center ml-4">
        <button className="bg-orange-100 text-orange-500 font-bold py-1 px-3 rounded-lg hover:bg-orange-200">
          +Add
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
