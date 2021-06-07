import React, { Fragment } from 'react';
import Header from '../components/organisms/headers/Header'
import Main from '../components/organisms/mains/Main'
import Footer from '../components/organisms/footers/Footer'
import './Portfolio.css'

function Portfolio() {
    return (
        <Fragment>
            <Header />
            <Main />
            <Footer />
        </Fragment>
    );
}

export default Portfolio;