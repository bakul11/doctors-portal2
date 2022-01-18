import React from 'react';
import doctor1 from '../../../images/doctor1.png'
import doctor2 from '../../../images/doctor2.png'
import DoctorDetails from '../DoctorDetails/DoctorDetails';



const doctorData = [
    {
        photo: doctor1,
        name: "walson herry",
        title: "MBBS",
        phone: "+5598726268655"
    },
    {
        photo: doctor2,
        name: "selima gomez",
        title: "MBBS",
        phone: "+5598726268655"
    },
    {
        photo: doctor1,
        name: "daren sami",
        title: "MBBS",
        phone: "+5598726268655"
    },
    {
        photo: doctor2,
        name: "milina delpal",
        title: "MBBS",
        phone: "+5598726268655"
    }
]

const Doctor = () => {
    return (
        <div className='container' style={{ marginTop: "120px" }}>
            <div className="testimonial-title mb-5 text-center">
                <h3 className='fs-2'>our expert doctors</h3>
            </div>
            <div className="row gy-2">
                {
                    doctorData.map(doctor=><DoctorDetails doctor={doctor} key={doctor.name}></DoctorDetails>)
                }
            </div>
        </div>
    );
};

export default Doctor;