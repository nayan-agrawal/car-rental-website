import React from 'react';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import FormTwo from '../component/contact/FormTwo';
import SectionTitle from '../elements/section-title/SectionTitle';
import ContactLocation from '../component/contact/ContactLocation';


const Contact = () => {
    return (
        <>
            <SEO title="Blog Grid"/>
            <ColorSwitcher/>
            <main className="main-wrapper">
                <HeaderOne/>
                <BreadCrumbOne
                    title="Contact"
                    page="Contact"
                />

                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="contact-form-box shadow-box mb--30">
                                    <h3 className="title">Our Location</h3>
                                    <iframe className="mb-4 mb-lg-0"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2542719862286!2d79.08380651493526!3d21.18205568591554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaa48b6553e601855!2sCar%20Rental%20Services!5e0!3m2!1sen!2sin!4v1635602607206!5m2!1sen!2sin"
                                            frameBorder="0" style={{border: 0, width: "100%", height: "600px"}}
                                            allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 offset-xl-1">
                                <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--150">
                                    <h4 className="title">Phone</h4>
                                    <p>We provide service 24 x 7</p>
                                    <h4 className="phone-number"><a href="tel: +919423959655">+91 9423 959 655</a></h4>
                                </div>
                                <div className="contact-info mb--30">
                                    <h4 className="title">Email</h4>
                                    <p>Our support team will get back to in 48-h during standard business hours.</p>
                                    <h4 className="phone-number"><a
                                        href="mailto:info@example.com">info@carrentalnagpur.in.net</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="list-unstyled shape-group-12">
                        <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"}
                                                           alt="Bubble"/></li>
                        <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"}
                                                           alt="Bubble"/></li>
                        <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/circle-3.png"}
                                                           alt="Circle"/></li>
                    </ul>
                </div>

                <FooterOne parentClass="pt--150 pt_lg--100 pt_md--80 pt_sm--60"/>
            </main>
        </>
    )
}

export default Contact;