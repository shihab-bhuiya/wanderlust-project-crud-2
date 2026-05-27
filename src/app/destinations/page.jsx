import DestinationCard from '@/components/destinationCard';
import React from 'react';

const DestinationPage = async () => {
    const res = await fetch('http://localhost:5000/destination');
    const destinations = await res.json();
    console.log(destinations);
    return (
        <div className='container mx-auto '>
            <div className='grid grid-cols-3 gap-3'>
            {
                destinations.map((destination) => <DestinationCard key={destination._id}
                destination={destination}
                />)
            } 
            </div>
        </div>
    );
};

export default DestinationPage;