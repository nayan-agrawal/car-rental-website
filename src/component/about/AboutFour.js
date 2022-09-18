import React from 'react';
import {Link} from 'react-router-dom';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';


const AboutFour = () => {
    return (
        <div className="section section-padding case-study-featured-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="case-study-featured-thumb text-start">
                            <img src={process.env.PUBLIC_URL + "/images/banner/car-rental-about-us-banner-2.svg"}
                                 alt="travel"/>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="case-study-featured">
                            <div className="section-heading heading-left">
                                <span className="subtitle">Who we are</span>
                                <h2 className="title">Car Renting services for your budget</h2>
                                <p>Laxmi Car Rental is Nagpur's most reliable taxi and car rental in nagpur service
                                    provider. We provide the most affordable chauffeur-driven A/C and non-A/C premium cars and taxis from our
                                    largest collection of cars in our fleet for your comfort, ranging from
                                    cars, coaches to buses and mini vans. In Nagpur, we are recognised for our
                                    trustworthiness, service and highly skilled police verified drivers.
                                    Our chauffeurs are courteous and well-mannered in their
                                    interactions, and they are well-versed with the area's routes and travel
                                    destinations. Many of our clients return on a regular basis to use our services.</p>
                                <a href="tel: +919423959655" className="axil-btn btn-fill-primary btn-large">Book Now</a>
                            </div>
                            <div className="case-study-counterup">
                                <div className="single-counterup">
                                    <h2 className="count-number">
                                        <TrackVisibility once>
                                            {({isVisible}) => (
                                                <span className="number count">
                                        {isVisible ? <CountUp end="10" duration={1}/> : null}
                                    </span>
                                            )}
                                        </TrackVisibility>
                                        <span className="symbol">+</span>
                                    </h2>
                                    <span className="counter-title">Years of experience</span>
                                </div>
                                <div className="single-counterup">
                                    <h2 className="count-number">
                                        <TrackVisibility once>
                                            {({isVisible}) => (
                                                <span className="number count">
                                        {isVisible ? <CountUp end="150000" duration={1}/> : null}
                                    </span>
                                            )}
                                        </TrackVisibility>
                                        <span className="symbol">+</span>
                                    </h2>
                                    <span className="counter-title">Kilometers so far</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutFour;