import React, { Fragment } from 'react';
import './Main.css';
import SectionIntro from '../../molecules/sections/SectionIntro';
import SectionProjects from '../../molecules/sections/SectionProjects';
import SectionProject1 from '../../molecules/sections/SectionProject1';
import SectionProject2 from '../../molecules/sections/SectionProject2';
import BlogTema from '../../atoms/images/tema.gif';
import BlogMenu from '../../atoms/images/menu.gif';
import BlogSass from '../../atoms/images/sass.gif';
import Carousel from '../../atoms/images/carousel.jpg';
import Portfolio2 from '../../atoms/images/hooks.gif';
import Portfolio3 from '../../atoms/images/atomic.gif';

function Main() {
    return (
        <Fragment>

            <section id="Main"></section>

            <SectionIntro
                title = 'Cuando quieras y donde quieras'
                subtitle='Todas las páginas están diseñadas para que las disfrutes en tu pantalla favorita. Ya sea tu TV, tableta, computadora, o teléfono.'
                logo='screensAnimation'
            />
            <SectionIntro
                title = 'Detrás de cámaras y descargas ilimitadas'
                subtitle='¡Código libre y bien documentado! Todas las páginas están disponibles en GitHub. Puedes descargar o clonar los repositorios cuantas veces quieras.'
                logo='githubLogo'
            />

            <section>Últimos estrenos</section>

            <SectionProject1
                title_0=
                'Blog de bolsillo'
                subtitle_0=
                'Todos los apuntes que tienes en tu celular se pueden publicar en "GitHub Pages"'
                image_0={BlogTema}

                title_1=
                'Estilo e interactividad con CSS puro'
                subtitle_1=
                'Puedes cambiar el tema del blog y activar su menú desplegable con CSS puro. ¡Sin utilizar JavaScript!'
                image_1={BlogMenu}
                button_1='CSS'

                title_2=
                'CSS modularizado'
                subtitle_2=
                'SASS permite dividir el código de CSS en múltiple ficheros. Lo cual facilita la lectura y mantenimiento del código.'
                image_2={BlogSass}
                button_2='SASS'

                title_3=
                '¿Qué es más fácil que escribir en texto plano?'
                subtitle_3=
                'Todos los post están escritos en formato Markdown. Un generador de plantillas los convierte en HTML y los publica en "GitHub Pages".'
                image_3={BlogTema}
                button_3='GitHub'

                button_4='Sinopsis'
                button_5='Ver ahora ▶'
                button_6='Repositorio ▶'
            />
            <SectionProject2
                title_0=
                'Portafolio personal'
                subtitle_0=
                'En un portafolio se va a reutiizar mucho código. Por lo tanto decidí utilizar la librería "React"'
                image_0={Carousel}

                title_1=
                'Este título es un componente reutilizable'
                subtitle_1=
                'Incluso este párrafo es un componente reutilizable. Por amo "React", porque me permite crear componentes fáciles de reutilizar.'
                image_1={Portfolio3}
                button_1='React.js'

                title_2=
                'Este título se actualiza al hacer clic en un botón'
                subtitle_2=
                'Los "Hooks" permiten actualizar el estado de un componente sin tener que escribir una clase. Además el código se vuelve más limpio y legible.'
                image_2={Portfolio2}
                button_2='Hooks'

                title_3=
                'Diseño atómico, "a-tó-mi-co".'
                subtitle_3=
                'Todos los componentes están organizados con la metodología: "Diseño Atómico". La cual facilita la reutilización del código y agiliza los posibles cambios visuales.'
                image_3={Portfolio3}
                button_3='Atómico'

                button_4='Sinopsis'
                button_5='Ver ahora ▶'
                button_6='Repositorio ▶'
            />
            <section>Un vistazo a los próximos lanzamientos</section>
            <SectionProjects
                title=
                'No soy diseñador pero...'
                subtitle=
                '... Sé que voy a trabajar con diseñadores. Por lo tanto debo aprender más sobre "Figma" y mejorar los "posters" que diseñé para este portafolio.'
                image0={Carousel}

                title1=
                'No soy diseñador pero...'
                subtitle1=
                '... Sé que voy a trabajar con diseñadores. Por lo tanto debo aprender más sobre "Figma" y mejorar los "posters" que diseñé para este portafolio.'
                image1={Carousel}
                button1='Figma'

                title2=
                'API REST'
                subtitle2=
                '¿Ajax o WebSockets? Ese es dilema.'
                image2={BlogSass}
                button2='API'

                title3=
                'Una app con JavaScript Puro'
                subtitle3=
                'Es hora de demostrar mis conocimientos en "Programación orientada a objetos".'
                image3={BlogSass}
                button3='JavaScript'

                title4=
                'Backend con Node.JS'
                subtitle4=
                '¿Porqué es importante crear bases de datos no relacionales?'
                image4={Portfolio3}
                button4='MongoDB'

                title5=
                'Portafolio - Segunda Temporada'
                subtitle5=
                'Menos botones y más memes.'
                image5={Portfolio3}
                button5='Portafolio 2'

                title6=
                'Blog - Segunda Temporada'
                subtitle6=
                'Es hora de completar la ruta de aprendizaje.'
                image6={BlogSass}
                button6='Blog 2'
            />
        </Fragment>
    )
}

export default Main;