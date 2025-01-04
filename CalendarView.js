import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CalendarView = ({ onDateSelect }) => {
    const [availableSlots, setAvailableSlots] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        fetchAvailableSlots(selectedDate);
    }, [selectedDate]);

    const fetchAvailableSlots = async (date) => {
        const response = await fetch(`/api/availability?date=${date.toISOString().split('T')[0]}`);
        const data = await response.json();
        setAvailableSlots(data.slots);
    };

    const handleDateChange = (event) => {
        setSelectedDate(new Date(event.target.value));
    };

    const handleSlotSelect = (slot) => {
        onDateSelect(slot);
    };

    return (
        <Container className="calendar-view">
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <input 
                        type="date" 
                        className="form-control"
                        value={selectedDate.toISOString().split('T')[0]} 
                        onChange={handleDateChange} 
                    />
                </Col>
            </Row>
            <Row className="slots">
                {availableSlots.map((slot, index) => (
                    <Col key={index} xs={12} md={4} className="mb-3">
                        <Button variant="outline-primary" onClick={() => handleSlotSelect(slot)}>
                            {slot}
                        </Button>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CalendarView;