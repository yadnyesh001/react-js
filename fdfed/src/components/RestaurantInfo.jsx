import React from "react";

const RestaurantInfo = () => {
  return (
    <div className="bg-black text-white px-6 py-4 flex justify-between items-center">
      {/* Restaurant Logo and Details */}
      <div className="flex items-center space-x-4">
        <img
          src="path-to-your-logo.png"
          alt="Restaurant Logo"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h1 className="text-lg font-bold">Poultry Palace</h1>
          <p className="text-sm text-gray-400">New Jersey</p>
        </div>
      </div>

      {/* Distance, Rating, and Actions */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 text-sm">
          <span>3.2 km</span>
          <span className="flex items-center text-green-400 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-4 h-4"
            >
              <path d="M8 12.146L3.781 14.3l.814-4.743L1.2 6.865l4.758-.692L8 2.5l2.042 3.673 4.758.692-3.396 2.692.814 4.743L8 12.146z" />
            </svg>
            3.9
          </span>
          <span className="text-gray-400">(1k+ Reviews)</span>
        </div>

        <button className="text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-5 h-5"
          >
            <path d="M15.803 4.857a.5.5 0 0 1 .02.705l-7 7a.5.5 0 0 1-.707 0l-3-3a.5.5 0 0 1 .707-.707L8.5 11.293l6.646-6.646a.5.5 0 0 1 .657-.79z" />
          </svg>
        </button>

        <button className="text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-5 h-5"
          >
            <path d="M8 15s6-4.686 6-8.5a6 6 0 1 0-12 0C2 10.314 8 15 8 15z" />
            <path d="M8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RestaurantInfo;
