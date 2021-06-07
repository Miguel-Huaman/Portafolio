import React, { Fragment } from 'react'
import SectionImageText from '../../molecules/sections/SectionImageText'
import SectionTextImage from '../../molecules/sections/SectionTextImage'
import Image1 from '../../atoms/images/image1.svg'
import Image2 from '../../atoms/images/image2.svg'

function Main() {
    return (
        <Fragment>
            <SectionTextImage
                title="Cuando quieras, donde quieras"
                subtitle="Disfrútalo en tu pantalla favorita, ya sea tu TV, tableta, computadora, teléfono y otros."
                logo={Image1}
            />
            <SectionImageText
                title="Decarga las páginas o clona los repositorios"
                subtitle="Descargas ilimitadas para ver lo que quieras, cuando quieras. Lleva tus páginas favoritas siempre contigo, incluso sin conexión."
                logo={Image2}
            />
            <SectionTextImage
                title="Cuando quieras, donde quieras"
                subtitle="Disfrútalo en tu pantalla favorita, ya sea tu TV, tableta, computadora, teléfono y otros."
                logo={Image1}
            />
            <SectionImageText
                title="Decarga las páginas o clona los repositorios"
                subtitle="Descargas ilimitadas para ver lo que quieras, cuando quieras. Lleva tus páginas favoritas siempre contigo, incluso sin conexión."
                logo={Image2}
            />
        </Fragment>
    )
}

export default Main;