import React from 'react';

const ServiceProvideDetails = (props) => {
  const  { photo, title, dis }=props.provide;
    return (
        <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="provide-content text-center">
                <img src={photo} alt="" className='img-fluid mb-3' style={{height:"70px"}}/>
                <h5 className='pt-2 pb-2'>{title}</h5>
                <p>{dis}</p>
            </div>
        </div>
    );
};

export default ServiceProvideDetails;