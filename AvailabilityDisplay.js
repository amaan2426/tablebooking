import React, { useEffect, useState } from 'react';

const AvailabilityDisplay = ({ selectedDate, selectedTime, numberOfGuests }) => {
    const [availableSlots, setAvailableSlots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAvailableSlots = async () => {
            try {
                const response = await fetch(`/api/bookings/availability?date=${selectedDate}&time=${selectedTime}&guests=${numberOfGuests}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch available slots');
                }
                const data = await response.json();
                setAvailableSlots(data.slots);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (selectedDate && selectedTime && numberOfGuests) {
            fetchAvailableSlots();
        }
    }, [selectedDate, selectedTime, numberOfGuests]);

    if (loading) {
        return <div>Loading available slots...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Available Time Slots</h2>
            {availableSlots.length > 0 ? (
                <ul>
                    {availableSlots.map((slot, index) => (
                        <li key={index}>{slot}</li>
                    ))}
                </ul>
            ) : (
                <p>No available slots for the selected date and time.</p>
            )}
        </div>
    );
};

export default AvailabilityDisplay;