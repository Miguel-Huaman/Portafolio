import React, { Fragment } from 'react'
import './Main.css'
import SectionImageText from '../../molecules/sections/SectionImageText'
import SectionTextImage from '../../molecules/sections/SectionTextImage'
import SectionProjects from '../../molecules/sections/SectionProjects'
import SectionProject1 from '../../molecules/sections/SectionProject1'
import SectionProject2 from '../../molecules/sections/SectionProject2'
import Image1 from '../../atoms/images/image1.svg'
import Image2 from '../../atoms/images/image2.svg'

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

            <SectionProject1
                title = 'Blog de bolsillo'
                subtitle = 'Todos los apuntes que están en tu celular se pueden publicar en "GitHub Pages"'
                image0 = {Image1}
                button1 = 'Ver ahora ▶'

                title2 = 'Todo es posible con CSS'
                subtitle2 = 'Menu desplegable y cambio de tema con CSS. Sin utilizar JavaScript'
                image2 = {Image1}
                button2 = 'CSS'

                title3 = 'SEO y Accesibilidad'
                subtitle3 = 'Puntaje perfecto en "Lighthouse".'
                image3 = {Image2}
                button3 = 'Lighthouse'

                title4 = 'Todo está escrito en texto plano'
                subtitle4 = 'Todos los post están escritos en "Markdown".'
                image4 = {Image1}
                button4='Markdown'

                title5 = 'Alojado en "GitHub Pages"'
                subtitle5 = 'Jekyll y GitHub Pages convierten los archivos tipo markdown en HTML.'
                image5 = {Image1}
                button5='GitHub'

                title6 = 'Blog de bolsillo'
                subtitle6 = 'Todos los apuntes que están en tu celular se pueden publicar en "GitHub Pages"'
                image6 = {Image1}
                button6 = 'Sinopsis'
            />
            <SectionProject2
                title = 'Portafolio'
                subtitle = 'Con sabor a página de Streaming.'
                image0={Image2}
                button1 = 'Ver ahora ▶'

                title2 = 'Página construida con React.js'
                subtitle2 = 'Todas los componenetes son reutilizables.'
                image2 = {Image2}
                button2 = 'React.js'

                title3 = 'React Hooks'
                subtitle3 = 'Los cambios de estado facilitan la lectura del código.'
                image3 = {Image1}
                button3 = 'Hooks'

                title4 = 'Diseño atómico, a-tó-mi-co'
                subtitle4 = 'Las etiquetas HTML forman átomos, que a su vez forman componentes, que a su vez forman plantillas, que a su vez...'
                image4 = {Image1}
                button4 = 'Atómico'

                title5 = 'Imágenes propias'
                subtitle5 = 'SVG hecho con Illustrator'
                image5 = {Image1}
                button5='Arte'

                title6 = 'Portafolio'
                subtitle6 = 'Con sabor a página de Streaming.'
                image6 = {Image1}
                button6 = 'Sinopsis'
            />
            <section>Un vistazo a los próximos lanzamientos</section>
            <SectionProjects
                title = 'API'
                subtitle = 'Ajax y WebSockets'
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

                title5 = 'Alojado en "GitHub Pages"'
                subtitle5 = 'Jekyll y GitHub Pages convierten los archivos tipo markdown en HTML.'
                image5 = {Image1}
                button5='GitHub'

                title6 = 'Enlaces internos markdown'
                subtitle6 = 'Todos los post están enlazados internamente, y sus links funcionan offline.'
                image6 = {Image1}
                button6 = 'Offline'
            />
        </Fragment>
    )
}

export default Main;