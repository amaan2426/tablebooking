import React, { useState } from 'react';

const BookingForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!date || !time || guests < 1 || !name || !contact) {
            setError('Please fill in all fields correctly.');
            return;
        }

        const bookingDetails = { date, time, guests, name, contact };

        try {
            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingDetails),
            });

            if (response.ok) {
                setSuccess(true);
                setError('');
            } else {
                setError('Failed to create booking. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h2>Book a Table</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Booking successful!</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </label>
                <label>
                    Time:
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                </label>
                <label>
                    Number of Guests:
                    <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" required />
                </label>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Contact Details:
                    <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
                </label>
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default BookingForm;