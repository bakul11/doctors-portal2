import React from 'react';
import './DoctorDetails.css'

const DoctorDetails = (props) => {
    const { name, photo,title,phone } = props.doctor;
    return (
        <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className="card doctor-section text-center">
                <img src={photo} alt="" className="img-fluid" />
                <div className="card-body">
                    <h3 className="fs-8">{name}</h3>
                    <h5 className="fs-9 text-primary">{title}</h5>
                    <p className="text-secondary">{phone}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;