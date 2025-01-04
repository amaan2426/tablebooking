import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import AvailabilityDisplay from '../components/AvailabilityDisplay';
import BookingSummary from '../components/BookingSummary';

const Home = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBooking = (details) => {
    setBookingDetails(details);
  };

  return (
    <div>
      <h1>Restaurant Table Booking</h1>
      {!bookingDetails ? (
        <>
          <BookingForm onBooking={handleBooking} />
          <AvailabilityDisplay />
        </>
      ) : (
        <BookingSummary details={bookingDetails} />
      )}
    </div>
  );
};

export default Home;