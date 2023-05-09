import React from "react";
import Slider from "react-slick"

import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';

import '../../../styles/slider.css';
const TestimonialSlider= ()=>{

    const settings={
        dots:true,
        autoplay:true,
        infinite:true,
        speed:1000,
        autoplaySpeed:3000,
        swipeToSlide:true,
        slidesToShow:1,
        slidesToScroll:1
    }

        return(
            <Slider {...settings}>
                <div>
                    <p className="review_text">
                        From ordering to delivery, the process was seamless.
                        The food was fresh, tasty, and arrived promptly.
                        Highly recommend this food ordering service for all your cravings.
                    </p>
                    <div className="slider_content d-flex align-items-center gap-3">
                        <img src={ava01} alt="avatar " className="rounded"/>
                        <h6>Jhon Doe</h6>
                    </div>
                </div>
                <div>
                    <p className="review_text">
                        This food ordering service is a game-changer!
                        The website was easy to navigate and had all the information I needed.
                        Ordering was a breeze.
                    </p>
                    <div className="slider_content d-flex align-items-center gap-3">
                        <img src={ava02} alt="avatar " className=" rounded"/>
                        <h6>Suzane Marsh</h6>
                    </div>
                </div>
                <div>
                    <p className="review_text">
                        I was impressed with this ordering food website!
                        The food options were diverse, and the delivery was quick.
                        Highly recommend it for a convenient and enjoyable dining experience.
                    </p>
                    <div className="slider_content d-flex align-items-center gap-3">
                        <img src={ava03} alt="avatar " className=" rounded"/>
                        <h6>Steven Crock</h6>
                    </div>
                </div>
            </Slider>


    );

};


export default TestimonialSlider;
