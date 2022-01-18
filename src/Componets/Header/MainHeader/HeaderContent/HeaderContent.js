import React from 'react';
import './HeaderContent.css'
import chair from '../../../../images/chair.png';

const HeaderContent = () => {
    return (
        <section className="header-section container">
            <div className="row align-items-center mt-5 mb-5 gy-4">
                <div className="col-lg-4">
                    <div className="header-title">
                        <h2>Build your Smile <br />starts here</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nisi accusantium perspiciatis omnis at eius labore quasi tempora ducimus doloribus inventore quaerat sint modi, molestias aliquam reiciendis maiores beatae qui.</p>
                        <button type="submit" className='btn btn-success'>Appoiment Now</button>
                    </div>
                </div>
                <div className="col-lg-6 offset-md-2">
                    <div className="header-thumbnail">
                        <img src={chair} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderContent;