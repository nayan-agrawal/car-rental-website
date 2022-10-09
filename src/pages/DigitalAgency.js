import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import AboutOne from '../component/about/AboutOne';
import BannerOne from '../component/banner/BannerOne';
import CounterUpOne from '../component/counterup/CounterUpOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';
import ServicePropOne from '../component/service/ServicePropOne';
import TestimonialOne from '../component/testimonial/TestimonialOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';


const DigitalAgency = () => {

    return (
        <>
            <SEO title="Nagpur Car Rental"
                 metaDescription="Car Rental in Nagpur is Nagpur's one of the largest and best car rental Service provider. We provide cars on rent with driver from Nagpur to all over India"
                 metaKeywords="Car Rental Nagpur, Taxi Service in Nagpur, Car on Rent in Nagpur with driver"/>
            <ColorSwitcher/>
            <main className="main-wrapper">
                <HeaderOne/>
                <BannerOne/>
                <div className="section section-padding-2 bg-color-dark">
                    <div className="container">
                        <SectionTitle
                            subtitle="What We Can Do For You"
                            title="Services we can help you with"
                            description="We Offer several services to our clients and customers from Nagpur to all over India"
                            textAlignment="heading-light-left"
                            textColor=""
                        />
                        <div className='row'>
                            <ServicePropOne colSize="col-xl-4 col-md-6" serviceStyle="" itemShow="6"/>
                        </div>
                    </div>
                    <ul className="list-unstyled shape-group-10">
                        <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-9.png"}
                                                           alt="Circle"/></li>
                        <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"}
                                                           alt="Circle"/></li>
                        <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"}
                                                           alt="Circle"/></li>
                    </ul>
                </div>
                <AboutOne/>
                <ProjectOne itemShow="6"/>
                <CounterUpOne/>
                <TestimonialOne/>
                {/*<CtaLayoutOne />*/}
                <FooterOne parentClass=""/>
            </main>
        </>
    )
}

export default DigitalAgency;

