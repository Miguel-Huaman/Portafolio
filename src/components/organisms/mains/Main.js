import React, { Fragment } from 'react';
import './Main.css';
import SectionIntro from '../../molecules/sections/SectionIntro';
import SectionProjects from '../../molecules/sections/SectionProjects';
import SectionProject1 from '../../molecules/sections/SectionProject1';
import SectionProject2 from '../../molecules/sections/SectionProject2';
import BlogTema from '../../atoms/images/tema.gif';
import BlogMenu from '../../atoms/images/menu.gif';
import BlogSass from '../../atoms/images/sass.gif';

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
                image_0={BlogMenu}

                title_1=
                'Este título es un componente reutilizable'
                subtitle_1=
                'Incluso este párrafo es un componente reutilizable. Por amo "React", porque me permite crear componentes fáciles de reutilizar.'
                image_1={BlogSass}
                button_1='React.js'

                title_2=
                'Este título se actualiza al hacer clic en un botón'
                subtitle_2=
                'Los "Hooks" permiten actualizar el estado de un componente sin tener que escribir una clase. No parece gran cosa pero, gracias a los "hooks", el código es más limpio y legible.'
                image_2={BlogTema}
                button_2='Hooks'

                title_3=
                'Diseño atómico, "a-tó-mi-co".'
                subtitle_3=
                'Todos los componentes están organizados con la metodología: "Diseño Atómico". La cual facilita la reutilización del código y agiliza los posibles cambios visuales.'
                image_3={BlogMenu}
                button_3='Atómico'

                button_4='Sinopsis'
                button_5='Ver ahora ▶'
                button_6='Repositorio ▶'
            />
            <section>Un vistazo a los próximos lanzamientos</section>
            <SectionProjects
                title=
                'En Julio...'
                subtitle=
                'Una base de datos sobre todos los puestos de trabajo a los cuales he postulado'
                image0={BlogSass}

                title1=
                'En Julio...'
                subtitle1=
                'Una base de datos sobre todos los puestos de trabajo a los cuales he postulado'
                image1={BlogTema}
                button1='MongoDB'

                title2=
                'No soy diseñador pero...'
                subtitle2=
                '... Sé que voy a trabajar con diseñadores. Por lo tanto debo aprender "Figma"'
                image2={BlogSass}
                button2='Figma'

                title3=
                'La API más pequeña del mundo'
                subtitle3=
                'Protagonizada por Ajax y WebSockets'
                image3={BlogSass}
                button3='API'

                title4=
                'Una app con JavaScript Puro'
                subtitle4=
                'Es hora de demostrar mis conocimientos en "Programación orientada a objetos".'
                image4={BlogMenu}
                button4='JavaScript'

                title5=
                'Portafolio - Segunda Temporada'
                subtitle5=
                'Menos botones y más memes.'
                image5={BlogTema}
                button5='Portafolio 2'

                title6=
                'Blog - Segunda Temporada'
                subtitle6=
                'Es hora de completar la ruta de aprendizaje.'
                image6={BlogMenu}
                button6='Blog 2'
            />
        </Fragment>
    )
}

export default Main;