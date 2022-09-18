import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';

const Data = [
    {
        id: 1,
        title: "Affordable, Convenient & Safe",
        para: "You can rent a car with driver in Nagpur at a low cost for an hour, a day, or a month, with a variety of travel packages, door pickup, and availability 24 hours a day, 7 days a week at best and competitive prices"
    },
    {
        id: 2,
        title: "Highly skilled, police verified drivers",
        para: "Laxmi car rental provides best-in-class service with drivers at competitive rates, far surpassing any self-drive car rental experience. On the trip, sit back, relax, and enjoy time with your mates."
    },
    {
        id: 3,
        title: "100% Door Step Pickup & Drop Facilities",
        para: "We provide door to door pickup and drop facilities for our customers to ensure their safety. We at Laxmi car rental will pick you up from communicated location and drop at the same location."
    },
    {
        id: 4,
        title: "Booking in 2 minutes",
        para: "We believe in fast and transparent services and thus provides an easy on call booking facilities for our customers to book a car on rent in Nagpur or hire a car in just one call. Isn't it amazing! call us now to book a car on rent with us."
    },
    {
        id: 5,
        title: "Explore Anywhere",
        para: "Be it just a trip to your favorite restaurant or that long awaited shopping trip or may be exploring the tourist places away from your hometown, with laxmi car rental the opportunities are limitless. You can go anywhere you like."
    }
]


const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20 mb--50">
            <div className="container">
                <SectionTitle
                    subtitle="Our Value"
                    title="Why should you book a car with us?"
                    description="Laxmi Car Rental offers a host of benefits like"
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Data.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"}
                                                   alt="Circle"/></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"}
                                                   alt="Circle"/></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"}
                                                   alt="Circle"/></li>
            </ul>
        </div>
    )
}

export default AboutThree;