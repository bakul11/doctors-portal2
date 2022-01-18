import React from 'react';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import ServicesDetails from '../ServicesDetails/ServicesDetails';
const serviceData = [
    {
        name: "opening time",
        icon: faClock,
        title: "9Am - 12PM",
        background: "primary"
    },
    {
        name: "visit our location",
        icon: faMapMarkerAlt,
        title: "mirpur 10 dhaka",
        background: "danger"
    },
    {
        name: "contact with us",
        icon: faPhone,
        title: "01791860562",
        background: "primary"
    }
]

const Services = () => {
    return (
        <div className='container mt-5'>
            <div className="row gy-1">
                {
                    serviceData.map(service=><ServicesDetails service={service} key={service.name}></ServicesDetails>)
                }
            </div>
        </div>
    );
};

export default Services;