import React, { Fragment } from 'react'
import Banner from '../../molecules/banners/Banner.js'

function Header() {
    return (
        <Fragment>
            <Banner
                title="Miguel&nbsp;Angel&nbsp;+"
                subtitle="Aplicaciones y páginas web exclusivas. Disfrútalas aquí y en todos tus dispositivos."
                button="Empieza tu prueba gratuita"
                description=
                "Aplican términos y condiciones. La entrevista laboral presencial es gratis en la ciudad de Lima, Perú. Entrevistas por video llamada disponible en 195 países."
            />
        </Fragment>
    )
}

export default Header;