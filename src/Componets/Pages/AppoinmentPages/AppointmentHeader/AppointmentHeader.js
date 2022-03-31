import React from 'react';
import chair from '../../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const AppointmentHeader = ({ handleDateChange}) => {
    return (
        <section className="appointment-section container mt-5">
            <div className="row gy-3">
                <div className="col-lg-5">
                    <div className='d-flex align-items-center mt-5'>
                        <Calendar onChange={handleDateChange} value={new Date()} />
                    </div>
                </div>
                <div className="col-lg-7">
                    <img src={chair} alt="" />
                </div>
            </div>
        </section>
    );
};

export default AppointmentHeader;