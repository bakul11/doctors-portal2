import React from 'react';
import cavity from '../../../images/cavity.png'
import teeath from '../../../images/whitening.png'
import fluoride from '../../../images/fluoride.png'
import ServiceProvideDetails from '../ServiceProvideDetails/ServiceProvideDetails';
const servicePoint = [
    {
        photo: cavity,
        title: "floride treatment",
        dis:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos ipsum veritatis cumque dicta a earum, dignissimos eius excepturi laboriosam."
    },
    {
        photo: teeath,
        title: "cavity filling",
        dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos ipsum veritatis cumque dicta a earum, dignissimos eius excepturi laboriosam."
    },
    {
        photo: fluoride,
        title: "teath whitening",
        dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos ipsum veritatis cumque dicta a earum, dignissimos eius excepturi laboriosam."
    },

]

const ServicesSection = () => {
    return (
        <div className='container' style={{marginTop:"100px"}}>
            <div className="serviceTitle text-center mt-5 mb-5">
                <h3 className='text-primary'>our services</h3>
                <h3 className='fs-2'>services we provide</h3>
            </div>
            <div className="row gy-4 mt-5">
                {
                    servicePoint.map(point=><ServiceProvideDetails provide={point} key={point.title}></ServiceProvideDetails>)
                }
            </div>
        </div>
    );
};

export default ServicesSection;