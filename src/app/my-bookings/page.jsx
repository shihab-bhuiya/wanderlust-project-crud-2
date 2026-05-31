import { DeleteAlert } from '@/components/DeleteAlert';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  const user = session?.user;
console.log("USER SErver IDD",user);
  if (!user) {
    return (
      <div className="text-center mt-20">
        Please login to see your bookings
      </div>
    );
  }
  const res = await fetch(`http://localhost:5000/bookings/${user.id}`);
  const data = await res.json();
  console.log("Data",data); 
  return (
    <div className="px-5 my-20">
      <h1 className="text-center font-bold text-3xl mb-10">
        My Bookings
      </h1>

      {/* Horizontal scroll container */}
      <div className="flex flex-col gap-5 overflow-x-auto pb-5">
        {data?.map((booking, index) => (
          <div
            key={booking._id || index}
            className="min-w-62.5 bg-white flex  shadow-md rounded-xl p-4 border"
            >
            <img src={booking.imageUrl} alt={booking.destinationName} />
            <div> 
            <h2 className="font-semibold text-lg">
              {booking.country || "No Title"}
            </h2>

            <p className="text-sm text-gray-600">
              {booking.destinationName || "No location"}
            </p>

            <p className="text-sm mt-2">
              Date: {booking.departureDate || "N/A"}
            </p>
            <DeleteAlert bookingId={booking._id}/>
          </div></div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;