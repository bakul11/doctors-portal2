import React from 'react';
import Appoitment from './Appoitment/Appoitment';
import DentalCare from './DentalCare/DentalCare';
import Doctor from './Doctor/Doctor';
import MainHeader from './MainHeader/MainHeader';
import ServicesSection from './ServicesSection/ServicesSection';
import Testimonial from './Testimonial/Testimonial';

const Header = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <ServicesSection></ServicesSection>
            <DentalCare></DentalCare>
            <Appoitment></Appoitment>
            <Testimonial></Testimonial>
            <Doctor></Doctor>
        </div>
    );
};

export default Header;