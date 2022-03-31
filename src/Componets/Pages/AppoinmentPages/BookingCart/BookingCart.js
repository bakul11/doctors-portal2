import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCart = ({ booking,date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4">
            <div className="card p-5 text-center">
                <h2 className='fs-5'>{booking.name}</h2>
                <h3 className='fs-6 text-primary'>{booking.time}</h3>
                <p>{booking.space} space available</p>
                <button type="button" className='btn btn-success' onClick={openModal}>book appointment</button>
                <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} booking={booking} date={date}></AppointmentForm>
            </div>
        </div>
    );
};

export default BookingCart;