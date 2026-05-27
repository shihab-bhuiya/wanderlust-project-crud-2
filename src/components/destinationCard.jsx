import Image from "next/image";
import Link from "next/link";
import React from "react";

const DestinationCard = ({ destination }) => {
  const {_id,
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
    
  } = destination;

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={destinationName}
          className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
         
        />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-4 py-1 rounded-full shadow">
          {category}
        </span>

        {/* Price */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow">
          <p className="text-sm text-gray-500">Starting From</p>
          <h2 className="text-xl font-bold text-blue-600">
            ${price}
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        
        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {destinationName}
          </h1>
          <p className="text-gray-500 text-sm">
            📍 {country}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Info */}
        <div className="flex items-center justify-between text-sm text-gray-600 border-t pt-4">
          <div>
            <p className="font-semibold">Duration</p>
            <p>{duration} Days</p>
          </div>

          <div>
            <p className="font-semibold">Departure</p>
            <p>{departureDate}</p>
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300">
       <Link href={`/destinations/${_id}`}>  Explore Now </Link>  
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;