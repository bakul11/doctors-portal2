import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import DashSideBar from '../DashBoard/DashSideBar/DashSideBar';
import PatientsData from './PatientsData/PatientsData';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7500/allpatients')
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
                console.log(data);
            })
    }, [])

    return (
        <div>
            <DashSideBar></DashSideBar>
            <div className="row">
                <PatientsData appointments={appointments}></PatientsData>
            </div>
        </div>
    );
};

export default AllPatients;