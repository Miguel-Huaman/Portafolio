import React, { Fragment } from 'react'
import Banner from '../../molecules/banners/Banner.js'

function Header() {
    return (
        <Fragment>
            <Banner
                title="Producciones originales de Miguel&nbsp;Angel."
                subtitle="Páginas web exclusivas. Disfrútalas en todos tus dispositivos."
            />
        </Fragment>
    )
}

export default Header;