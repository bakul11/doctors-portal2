import React from 'react';
import dental from '../../../images/treatment.png'

const DentalCare = () => {
    return (
        <div className='container' style={{marginTop:"104px"}}>
            <div className="row gy-3 gx-2">
                <div className="col-lg-5 col-md-12">
                    <div className="dental-thumbnail">
                        <img src={dental} alt="" className="img-fuild rounded mx-auto d-block" style={{height:"450px"}}/>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="dental-content">
                        <h3 className='fs-2'>exceptional dental <br />care,on your terms</h3>
                        <p className='text-secondary mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur mollitia deleniti consequuntur aut qui laborum, delectus minima placeat, iusto quia vitae nemo et nihil molestiae illum doloribus rem ipsa dolorum. Similique cupiditate reiciendis officia mollitia nulla soluta id enim, velit nemo ab nam quibusdam placeat possimus et quidem omnis voluptatibus error quas voluptate laboriosam magnam corrupti accusamus. Nisi explicabo id sapiente consequuntur dicta illo porro aliquid similique esse quo incidunt fugit tempore ex, nihil distinctio excepturi quae optio praesentium eos enim quam quas consequatur! Autem commodi, harum eius facere facilis pariatur perferendis dignissimos deleniti voluptates maxime. Est incidunt architecto ipsam.</p>
                        <button type="submit" className='btn btn-success mt-2'>Dental care</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;