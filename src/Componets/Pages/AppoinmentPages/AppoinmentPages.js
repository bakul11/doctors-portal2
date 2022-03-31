import React, { useState } from 'react';
import Footer from '../../Header/Footer/Footer';
import NavBar from './../../Header/MainHeader/NavBar/NavBar';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import BookAppointment from './BookAppointment/BookAppointment';

const AppoinmentPages = ({date}) => {
    const [seletedDate, setSeletedDate] = useState(new Date())
    const handleDateChange = date => {
        setSeletedDate(date);
    }
    return (
        <div>
            <NavBar></NavBar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={seletedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );

};

export default AppoinmentPages;