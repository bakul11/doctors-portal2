import React from 'react';
import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light pt-5" id="slide">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link me-5 text-capitalize active nobody" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5 text-dark text-capitalize nobaby" to="/about">about us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5 text-dark text-capitalize nobaby" to="/service">services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5 text-light text-capitalize nobaby" to="/review">Review</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link me-5 text-light text-capitalize nobaby" to="/blog">blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5 text-light text-capitalize nobaby" to="/contact">contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;