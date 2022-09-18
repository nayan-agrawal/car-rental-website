import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import ServicePropOne from '../component/service/ServicePropOne';
import AboutThree from '../component/about/AboutThree';
import CounterUpTwo from '../component/counterup/CounterUpTwo';


const ServiceTwo = () => {
    return (
        <>
            <SEO title="Services"/>
            <ColorSwitcher/>
            <main className="main-wrapper">
                <HeaderOne/>
                <BcrumbBannerOne
                    title="Best car rental services for needs"
                    paragraph="Choose one of your services to travel from Nagpur with a ride of your choice safely and with pride."
                    styleClass=""
                    mainThumb="/images/banner/services-banner.svg"
                />
                <CounterUpTwo/>
                <div className="section section-padding bg-color-light">
                    <div className="container">
                        <SectionTitle
                            subtitle="What We Can Do For You"
                            title="Services we can <br> help you with"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        />
                        <div className="row">
                            <ServicePropOne colSize="col-lg-4 col-md-6" serviceStyle="service-style-2"
                                            marginTop="no"/>
                        </div>
                    </div>
                </div>

                <AboutThree/>

                {/*<CtaLayoutOne/>*/}
                <FooterOne parentClass=""/>
            </main>
        </>
    )
}

export default ServiceTwo;