import React from 'react';

const BookingSummary = ({ bookingDetails }) => {
    return (
        <div className="booking-summary">
            <h2>Booking Confirmation</h2>
            <p><strong>Name:</strong> {bookingDetails.name}</p>
            <p><strong>Date:</strong> {bookingDetails.date}</p>
            <p><strong>Time:</strong> {bookingDetails.time}</p>
            <p><strong>Number of Guests:</strong> {bookingDetails.guests}</p>
            <p><strong>Contact:</strong> {bookingDetails.contact}</p>
            <p>Your reservation has been successfully made!</p>
        </div>
    );
};

export default BookingSummary;