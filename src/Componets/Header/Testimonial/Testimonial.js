import React from 'react';
import team1 from '../../../images/people-1.png'
import team2 from '../../../images/people-2.png'
import team3 from '../../../images/people-3.png'
import TestimonialTeam from '../TestimonialTeam/TestimonialTeam';

const testimonialData = [
    {   
        photo:team1,
        name: "walson herry",
        country: "california",
        dis:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis architecto nesciunt hic error necessitatibus et saepe magni, ipsam obcaecati magnam debitis vero optio distinctio ab cupiditate odit at ipsa nostrum!"
    },
    {
        photo: team2,
        name: "selima gomez",
        country: "japan",
        dis: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis architecto nesciunt hic error necessitatibus et saepe magni, ipsam obcaecati magnam debitis vero optio distinctio ab cupiditate odit at ipsa nostrum!"
    },
    {
        photo: team3,
        name: "natasha malkova",
        country: "california",
        dis: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis architecto nesciunt hic error necessitatibus et saepe magni, ipsam obcaecati magnam debitis vero optio distinctio ab cupiditate odit at ipsa nostrum!"
    },
    
]
const Testimonial = () => {
    return (
        <div className='container' style={{marginTop:"120px"}}>
            <div className="testimonial-title mb-5">
                <h5 className='text-uppercase text-info'>testimonial</h5>
                <h3 className='fs-2'>what's our patients <br />says</h3>
            </div>
            <div className="row gy-2">
                {
                    testimonialData.map(testimonial => <TestimonialTeam singleTestimonial={testimonial} key={testimonial.name}></TestimonialTeam>)
                }
            </div>
        </div>
    );
};

export default Testimonial;