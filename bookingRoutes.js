const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Route to create a new booking
router.post('/bookings', bookingController.createBooking);

// Route to get a booking by ID
router.get('/bookings/:id', bookingController.getBooking);

// Route to delete a booking by ID
router.delete('/bookings/:id', bookingController.deleteBooking);

module.exports = router;