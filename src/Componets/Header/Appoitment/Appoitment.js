import React from 'react';
import './Appoitment.css'
import doctor from '../../../images/doctor.png'

const Appoitment = () => {
    return (
        <div className='container-fluid appoiment-section'>
            <div className="row align-items-center do">
                <div className="col-lg-5 col-md-12">
                    <div className="appointment-thumbnail">
                        <img src={doctor} alt="" className="img-fluid d-block mx-auto" style={{height:"400px"}}/>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="appointment-content pt-3 pb-3">
                        <h3 className='text-info'>Appoitment</h3>
                        <h3 className='fs-2 text-light pt-3 pb-3'>make a appoitment <br />today</h3>
                        <p className="text-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum voluptatem aperiam placeat impedit voluptate culpa ducimus fuga saepe deleniti neque!</p>
                        <button className="btn btn-success">Get appoitment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoitment;