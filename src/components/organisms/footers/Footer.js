import React from 'react'
import About from '../../molecules/banners/About'
import Foto from '../../atoms/images/image2.svg'

function Footer() {
    return (
        <About
            title="Acerca de"
            foto={Foto}
        />
    )
}

export default Footer;