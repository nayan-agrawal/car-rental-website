import React from 'react'
import PropTypes from "prop-types";
import {Helmet} from "react-helmet";

const SEO = ( {title, metaDescription, metaKeywords} ) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Laxmi Car Rental Nagpur | {title}</title>
                <meta name="robots" content="noindex, follow" />
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={metaKeywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="canonical" href="https://carrentalnagpur.in.net/" />
            </Helmet>
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string,
    metaDescription: PropTypes.string,
    metaKeywords: PropTypes.string
};

export default SEO;