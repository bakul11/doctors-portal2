import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const AppointmentForm = ({ modalIsOpen, closeModal, booking,date}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        closeModal();
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h3 className='fs-2 text-center mt-5 text-primary'>{booking.name}</h3>
                <h4 className='fs-2 text-center mb-5 text-success'>{date.toDateString()}</h4>


                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="row gy-3">
                        <div className="col-lg-12">
                            <input type="text"{...register("fullName", { required: true })} placeholder="Full Name" className='form-control form-control-lg' />
                            {errors.fullName && <span className='text-danger fw-bold'>This field is required</span>}
                        </div>
                        <div className="col-lg-12">
                            <input type="email"{...register("email", { required: true })} placeholder="Email address" className='form-control form-control-lg' />
                            {errors.email && <span className='text-danger fw-bold'>This field is required</span>}
                        </div>
                        <div className="col-lg-12">
                            <input type="number"{...register("number", { required: true })} placeholder="Mobile Numbers" className='form-control form-control-lg' />
                            {errors.number && <span className='text-danger fw-bold'>This field is required</span>}
                        </div>
                        <div className="col-lg-12">
                            <select className='form-control form-control-lg' {...register("gender", { required: true })}>
                                <option selected>Select Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Others">Others</option>
                            </select>
                            {errors.gender && <span className='text-danger fw-bold'>This field is required</span>}
                        </div>
                    </div>

                    <div className='d-flex justify-content-end'>
                        <input type="submit" className='btn btn-success mt-3 fw-bold' value="submit Now" />
                    </div>
                    
                </form>

            </Modal>
        </div>
    );
};

export default AppointmentForm;