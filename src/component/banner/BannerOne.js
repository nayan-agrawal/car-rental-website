import React from 'react';
import {AnimationOnScroll} from 'react-animation-on-scroll';
import {Link} from 'react-router-dom';


const BannerOne = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                                <h1 className="title">Book a car on rent in Nagpur.</h1>
                                <span className="subtitle">Call us to book a car on rent to travel in India from Nagpur with a ride of your choice.</span>
                                <a href="tel: +919423959655"
                                   className="axil-btn btn-fill-primary btn-large">Book Now</a>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumbnail">
                            <AnimationOnScroll animateIn="zoomIn" duration={2} delay={300} animateOnce={true}>
                                <div className="large-thumb">
                                    <img src={process.env.PUBLIC_URL + "/images/banner/BannerIlustration.svg"}
                                         alt="Laptop"/>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-21">
                <li className="shape shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-39.png"} alt="Bubble"/>
                </li>
                <li className="shape shape-2">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-38.png"} alt="Bubble"/>
                </li>
                <li className="shape shape-3">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble"/>
                </li>
                <li className="shape shape-4">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble"/>
                </li>
                <li className="shape shape-5">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble"/>
                </li>
                <li className="shape shape-6">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-40.png"} alt="Bubble"/>
                </li>
                <li className="shape shape-7">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-41.png"} alt="Bubble"/>
                </li>
            </ul>
        </div>
    )
}

export default BannerOne;