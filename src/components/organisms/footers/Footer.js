import React, { Fragment } from 'react'
import About from '../../molecules/banners/About'
import Foto from '../../atoms/images/image2.svg'

function Footer() {
    return (
        <Fragment>
            <About
                title="Hola, soy Miguel&nbsp;Angel."
                foto={Foto}
                subtitle="Aficionado del Desarrollo web."
            />
        </Fragment>
    )
}

export default Footer;