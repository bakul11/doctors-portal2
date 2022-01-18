import React from 'react';
import './MainHeader.css'
import HeaderContent from './HeaderContent/HeaderContent';
import NavBar from './NavBar/NavBar';
import Services from './Services/Services';

const MainHeader = () => {
    return (
        <div className='mainHeader'>
            <NavBar></NavBar>
            <HeaderContent></HeaderContent>
            <Services></Services>
        </div>
    );
};

export default MainHeader;