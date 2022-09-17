import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedin, FaInstagram, FaVimeoV, FaDribbble, FaBehance, FaEnvelopeOpen } from "react-icons/fa";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from '../../utils';

const getServiceData = ServiceData;

const FooterOne = ({parentClass}) => {
    
    return (
        <footer className={`footer-area ${parentClass}`}>
            <div className="container">
                <div className="footer-main">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="footer-widget border-end">
                                <div className="footer-newsletter">
                                    <h2 className="title">Get in touch!</h2>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-5">
                                            <div className="d-flex p-3 border border-1 my-2">
                                                HO NO 531/A/28
                                                Gujarwadimothi Vihir
                                                Nagpur-440012
                                            </div>
                                            <div className="d-flex p-3 border border-1 my-2">
                                                76, Karve Nagar,
                                                Wardha Road,
                                                Nagpur-440015
                                            </div>
                                            <div className="d-flex p-3 border border-1 my-2">
                                                H. No. 1206/A/30
                                                Adarshnagar, Zopadpatti
                                                Nagpur - 440008
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-5">
                                            <div className="d-flex p-3 border border-1 my-2">
                                                PL NO. 159,
                                                Naik Nagarring Road,
                                                Nagpur-440027
                                            </div>
                                            <div className="d-flex p-3 border border-1 my-2">
                                                P. No. 63, Jagrutti nagar Opp.
                                                Garjana Bar Jaripatka,
                                                Nagpur-440008
                                            </div>
                                            <div className="d-flex p-3 border border-1 my-2">
                                                Plot No. 95,
                                                Rahi Lands Developers,
                                                Beltarodi, Nagpur-440037
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="row">
                                <div className="footer-widget">
                                    <h6 className="widget-title">Services</h6>
                                    <div className="footer-menu-link row">
                                        <div className="col-xl-6 col-lg-5">
                                            <ul className="list-unstyled">
                                                {getServiceData.slice(0, 5).map((data, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            to={process.env.PUBLIC_URL + `/service-details/${slugify(data.title)}`}>{data.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="col-xl-6 col-lg-5">
                                            <ul className="list-unstyled">
                                                {getServiceData.slice(5, -1).map((data, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            to={process.env.PUBLIC_URL + `/service-details/${slugify(data.title)}`}>{data.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"> 
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="https://axilthemes.com/">Laxmi Car Rental</a>.</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-bottom-link">
                                <ul className="list-unstyled">
                                    <li><Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/terms-use"}>Terms of Use</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterOne;