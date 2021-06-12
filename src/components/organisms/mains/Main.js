import React, { Fragment } from 'react'
import './Main.css'
import SectionImageText from '../../molecules/sections/SectionImageText'
import SectionTextImage from '../../molecules/sections/SectionTextImage'
import SectionText from '../../molecules/sections/SectionText'
import Image1 from '../../atoms/images/image1.svg'
import Image2 from '../../atoms/images/image2.svg'

function Main() {
    return (
        <Fragment>
            <section id="Main"></section>
            <SectionTextImage
                title="Cuando quieras y donde quieras."
                subtitle="Todas las páginas están diseñadas para que las disfrutes en tu pantalla favorita. Ya sea tu TV, tableta, computadora, o teléfono."
                logo={Image1}
            />
            <SectionImageText
                title="Detrás de cámaras y descargas ilimitadas"
                subtitle="¡Código libre y bien documentado! Todas las páginas están disponibles en GitHub. Puedes descargar o clonar los repositorios cuantas veces quieras."
                logo={Image2}
            />
            <section id="ultimp">Últimos estrenos</section>
            <SectionText
            />
            <SectionText
            />
        </Fragment>
    )
}

export default Main;