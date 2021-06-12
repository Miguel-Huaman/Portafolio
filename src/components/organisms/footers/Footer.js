import React, { Fragment } from 'react'
import About from '../../molecules/banners/About'
import Foto from '../../atoms/images/image2.svg'

function Footer() {
    return (
        <Fragment>
            <About
                title="Acerca de"
                foto={Foto}
            />
        </Fragment>
    )
}

export default Footer;