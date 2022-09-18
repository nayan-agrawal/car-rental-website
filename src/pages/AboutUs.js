import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import AboutThree from '../component/about/AboutThree';
import AboutFour from '../component/about/AboutFour';
import TestimonialOne from "../component/testimonial/TestimonialOne";


const AboutUs = () => {

    return (
        <>
            <SEO title="About us"/>
            <ColorSwitcher/>
            <main className="main-wrapper">
                <HeaderOne/>
                <BcrumbBannerOne
                    title="One of the most trustworthy car rental services"
                    paragraph="We provide cars on rent from Nagpur to all over India with best police verified drivers out there at best rates."
                    styleClass="thumbnail-4"
                    mainThumb="/images/banner/car-rental-about-us-banner-1.svg"
                />
                <AboutFour/>
                <AboutThree/>
                <TestimonialOne />
                {/*<CtaLayoutOne />*/}
                <FooterOne parentClass=""/>
            </main>
        </>
    )
}

export default AboutUs;