import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="row gy-5">
                <div className="col-lg-3 col-md-6">
                    <div className="footer-items">
                        <h3 className="text-primary">Dental Care</h3>
                        <ul>
                            <li><a href="#">emergency dental care</a></li>
                            <li><a href="#">check up</a></li>
                            <li><a href="#">teatment or personal diseases </a></li>
                            <li><a href="#">tooth extration</a></li>
                            <li><a href="#">booking doctors</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="footer-items">
                        <h3 className="text-primary">our services</h3>
                        <ul>
                            <li><a href="#">emergency dental care</a></li>
                            <li><a href="#">check up</a></li>
                            <li><a href="#">teatment or personal diseases </a></li>
                            <li><a href="#">tooth extration</a></li>
                            <li><a href="#">booking doctors</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="footer-items">
                        <h3 className="text-primary">oral health</h3>
                        <ul>
                            <li><a href="#">emergency dental care</a></li>
                            <li><a href="#">check up</a></li>
                            <li><a href="#">teatment or personal diseases </a></li>
                            <li><a href="#">tooth extration</a></li>
                            <li><a href="#">booking doctors</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="footer-items">
                        <h3 className="text-primary">our address</h3>
                        <p className='text-capitalize'>new york -101010 hudson <br />yards</p>
                        <ul className='d-flex align-items-center footer-social'>
                            <li className='ms-0'><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li className='ms-3'><a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                            <li className='ms-3'><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        </ul>
                        <div className="call mt-4">
                            <p>Call Now</p>
                            <button className="btn btn-success">+555235216625</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright mt-5">
                <p className='text-center'>copyright @ 2022-2023.All right Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;