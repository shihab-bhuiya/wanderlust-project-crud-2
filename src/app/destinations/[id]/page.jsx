import { EditModal } from "@/components/EditModal";
import Image from "next/image";
import React from "react";


const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`, {
    cache: "no-store",
  });

  const result = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="w-6xl mx-auto mb-2 flex justify-end"> 

            <EditModal result={result}/>
        </div>
      
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side Image */}
       <div className="relative w-full h-[350px] lg:h-full overflow-hidden">
  <img
    src={result.imageUrl}
    alt={result.destinationName}
    className="w-full h-full object-cover object-center"
  />
</div>

        {/* Right Side Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          
          {/* Category Badge */}
          <span className="w-fit bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {result.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            {result.destinationName}
          </h1>

          {/* Country */}
          <p className="text-lg text-gray-500 mb-6">
            📍 {result.country}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-7 mb-8">
            {result.description}
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            
            <div className="bg-gray-50 p-4 rounded-2xl shadow-sm border">
              <p className="text-gray-500 text-sm">Price</p>
              <h2 className="text-2xl font-bold text-gray-800">
                ${result.price}
              </h2>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl shadow-sm border">
              <p className="text-gray-500 text-sm">Duration</p>
              <h2 className="text-2xl font-bold text-gray-800">
                {result.duration} Days
              </h2>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl shadow-sm border col-span-2">
              <p className="text-gray-500 text-sm">Departure Date</p>
              <h2 className="text-xl font-semibold text-gray-800">
                {result.departureDate}
              </h2>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300">
              Book Now
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;