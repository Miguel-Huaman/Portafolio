import React, { Fragment } from 'react'
import './Main.css'
import SectionImageText from '../../molecules/sections/SectionImageText'
import SectionTextImage from '../../molecules/sections/SectionTextImage'
import SectionProjects from '../../molecules/sections/SectionProjects'
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
            <section>Últimos estrenos</section>
            <SectionProjects
                title="titulo inicial 1"
                subtitle="subtitulo inicial 1"
                image0={Image1}

                title1="titulo alternativo A1"
                subtitle1="subtitulo alternativo A1"
                image1={Image2}
                button1="clic aquí A1"

                title2="titulo alternativo B1"
                subtitle2="subtitulo alternativo B1"
                image2={Image1}
                button2="clic aquí B1"

                title3="titulo alternativo C1"
                subtitle3="subtitulo alternativo C1"
                image3={Image2}
                button3="clic aquí C1"
            />
            <SectionProjects
                title="titulo inicial 02"
                subtitle="subtitulo inicial 02"
                image0={Image2}

                title1="titulo alternativo A2"
                subtitle1="subtitulo alternativo A2"
                image1={Image1}
                button1="clic aquí A2"

                title2="titulo alternativo B2"
                subtitle2="subtitulo alternativo B2"
                image2={Image2}
                button2="clic aquí B2"

                title3="titulo alternativo C2"
                subtitle3="subtitulo alternativo C2"
                image3={Image1}
                button3="clic aquí C2"
            />
            <SectionProjects
                title="titulo inicial 03"
                subtitle="subtitulo inicial 03"
                image0={Image1}

                title1="titulo alternativo A3"
                subtitle1="subtitulo alternativo A3"
                image1={Image2}
                button1="clic aquí A3"

                title2="titulo alternativo B3"
                subtitle2="subtitulo alternativo B3"
                image2={Image1}
                button2="clic aquí B3"

                title3="titulo alternativo C3"
                subtitle3="subtitulo alternativo C3"
                image3={Image2}
                button3="clic aquí C3"
            />
        </Fragment>
    )
}

export default Main;