import React from 'react';
import { Link } from 'react-router-dom';


const Logo = ({ limage, dimage, simage }) => {
    return (
        <Link to={process.env.PUBLIC_URL + "/"}>
            <img className="light-version-logo" width="150px" src={process.env.PUBLIC_URL + limage} alt="logo" />
            <img className="dark-version-logo" width="150px" src={process.env.PUBLIC_URL + dimage} alt="logo" />
            <img className="sticky-logo" width="150px" src={process.env.PUBLIC_URL + simage} alt="logo" />
        </Link>
    )
}


export default Logo;