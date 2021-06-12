import React, { Fragment } from 'react'
import './Main.css'
import SectionImageText from '../../molecules/sections/SectionImageText'
import SectionTextImage from '../../molecules/sections/SectionTextImage'
import SectionProjects from '../../molecules/sections/SectionProjects'
import Image1 from '../../atoms/images/image1.svg'
import Image2 from '../../atoms/images/image2.svg'

const handleClick = () => {
    window.scrollTo(0, 0);
}


function Main() {
    return (
        <Fragment>
            <section id="Main"></section>
            <SectionTextImage
                title = 'Cuando quieras y donde quieras'
                subtitle = 'Todas las páginas están diseñadas para que las disfrutes en tu pantalla favorita. Ya sea tu TV, tableta, computadora, o teléfono.'
                logo = {Image1}
            />
            <SectionImageText
                title = 'Detrás de cámaras y descargas ilimitadas'
                subtitle = '¡Código libre y bien documentado! Todas las páginas están disponibles en GitHub. Puedes descargar o clonar los repositorios cuantas veces quieras.'
                logo = {Image2}
            />
            <section>Últimos estrenos</section>
            <SectionProjects
                title = 'Blog de bolsillo'
                subtitle = 'Todos los apuntes que están en tu celular se pueden publicar en "GitHub Pages"'
                image0 = {Image1}

                title1 = 'Todo es posible con CSS'
                subtitle1 = 'Menu desplegable y cambio de tema con CSS. Sin utilizar JavaScript'
                image1 = {Image2}
                button1 = 'CSS'

                title2 = 'SEO y Accesibilidad'
                subtitle2 = 'Puntaje perfecto en "Lighthouse".'
                image2 = {Image1}
                button2 = 'Lighthouse'

                title3 = 'Todo está escrito en texto plano'
                subtitle3 = 'Todos los post están escritos en "Markdown".'
                image3 = {Image2}
                button3 = 'Markdown'

                title4 = 'GitHub Pages'
                subtitle4 = 'Jekyll y GitHub Pages convierten los archivos tipo markdown en HTML.'
                image4 = {Image1}
                button4 = 'Ver ahora ▶'
            />
            <SectionProjects
                title = 'Portafolio'
                subtitle = 'Con sabor a página de Streaming.'
                image0={Image2}

                title1 = 'Página construida con React.js'
                subtitle1 = 'Todas los componenetes son reutilizables.'
                image1 = {Image1}
                button1 = 'React.js'

                title2 = 'React Hooks'
                subtitle2 = 'Los cambios de estado facilitan la lectura del código.'
                image2 = {Image2}
                button2 = 'Hooks'

                title3 = 'Diseño atómico, a-tó-mi-co'
                subtitle3 = 'Las etiquetas HTML forman átomos, que a su vez forman componentes, que a su vez forman plantillas, que a su vez...'
                image3 = {Image1}
                button3 = 'Atómico'

                title4 = 'Imágenes propias'
                subtitle4 = 'SVG hecho con Illustrator'
                image4 = {Image1}
                button4 = 'Arte'
            />
            <section>Un vistazo a los próximos lanzamientos</section>
            <SectionProjects
                title = 'Este 2021'
                subtitle = 'Nuevos proyectos.'
                image0 = {Image1}

                title1 = 'API'
                subtitle1 = 'Ajax y WebSockets'
                image1 = {Image2}
                button1 = 'API'

                title2 = 'JavaScript puro'
                subtitle2 = 'Una app escrita con JavaScript puro. Programación orientada a objetos.'
                image2 = {Image1}
                button2 = 'JavaScript'

                title3 = 'Portafolio - Segunda Temporada'
                subtitle3 = 'Mejorar el código'
                image3 = {Image2}
                button3 = 'Portafolio 2'

                title4 = 'Blog - Segunda Temporada'
                subtitle4 = 'Mejorar el código'
                image4 = {Image1}
                button4 = 'Blog 2'
            />
            <button onClick={handleClick}>Top</button>
        </Fragment>
    )
}

export default Main;