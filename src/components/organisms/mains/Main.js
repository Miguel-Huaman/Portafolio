import React, { Fragment } from 'react'
import './Main.css'
import SectionImageText from '../../molecules/sections/SectionImageText'
import SectionTextImage from '../../molecules/sections/SectionTextImage'
import LoginControl from '../../molecules/sections/LoginControl'
import Image1 from '../../atoms/images/image1.svg'
import Image2 from '../../atoms/images/image2.svg'

function Main() {
    return (
        <Fragment>
            <section id="Main"></section>
            <SectionTextImage
                id="anchor"
                title="Donde quieras, cuando quieras."
                subtitle="Disfrútalo en tu pantalla favorita, ya sea tu TV, tableta, computadora, teléfono y otros. Todas las páginas están diseñadas para adaptarse al tamaño de tu pantalla."
                logo={Image1}
            />
            <SectionImageText
                title="Decarga las páginas o clona los repositorios"
                subtitle="Descargas ilimitadas para ver lo que quieras, cuando quieras. Lleva tus páginas favoritas siempre contigo, incluso sin conexión."
                logo={Image2}
            />
            <section id="ultimp">Últimos estrenos</section>
            <LoginControl />
        </Fragment>
    )
}

export default Main;