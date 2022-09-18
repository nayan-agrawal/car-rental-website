import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';


const ProjectGridTwo = () => {

    return (
        <>
            <SEO title="Portfolio"/>
            <ColorSwitcher/>
            <main className="main-wrapper">
                <HeaderOne/>
                <BcrumbBannerOne
                    title="Our fleets"
                    paragraph="A quick view of some of our cars from our large car inventory. You can pick a car of your choice."
                    styleClass=""
                    mainThumb="/images/banner/cars-wallpaper.png"
                />
                <ProjectOne colSize="col-xl-4 col-md-6" columnGap="row-15"/>
                {/*<CtaLayoutOne />*/}
                <FooterOne parentClass=""/>
            </main>
        </>
    )
}

export default ProjectGridTwo;