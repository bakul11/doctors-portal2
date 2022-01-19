import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ServicesDetails.css'
import React from 'react';

const ServicesDetails = (props) => {
    const { name, icon, title, background } = props.service;
    return (
        <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className={`${background} service-details d-flex align-items-center rounded p-5 text-light`}>
                <div className="service-thumbnail">
                    <FontAwesomeIcon icon={icon} size='3x' className='me-4'></FontAwesomeIcon>
                </div>
                <div className="service-content">
                    <h3 className='text-light'>{name}</h3>
                    <p className='text-capitalize text-light'>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;