/** @format */

"use client";

import React, { useState } from "react";
import { Card, Label, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const BookingCard = ({ result, onBook }) => {
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleBooking = async () => {
    if (!user) {
      alert("Please login first");
      return;
    }

    if (!date) {
      alert("Please select a departure date");
      return;
    }

    setLoading(true);

    try {
      const bookingData = {
        userId: user.id,
        userName: user.name,
        destinationId: result?._id,
        destinationName: result?.destinationName,
        price: result?.price,
        imageUrl: result?.imageUrl,
        country: result?.country,
        departureDate: new Date(date),
      };

      const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Booking failed");
      }

      console.log("Booking Success:", data);

      if (onBook) {
        onBook({
          ...result,
          selectedDate: date,
        });
      }

      toast("Booking successful!");
      setDate("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong while booking");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5">
      <Card className="rounded-xl border p-5 shadow-sm space-y-4">
        {/* Price */}
        <div>
          <p className="text-sm text-gray-500">Starting from</p>
          <h2 className="text-2xl font-bold">${result?.price}</h2>
          <p className="text-xs text-gray-400">Per Person</p>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <Label>Departure Date</Label>
          <input
            type="date"
            className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Button */}
        <Button
          className="w-full"
          onClick={handleBooking}
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Now"}
        </Button>
      </Card>
    </div>
  );
};

export default BookingCard;