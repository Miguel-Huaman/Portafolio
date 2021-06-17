import React, { Fragment } from 'react';
import './Main.css';
import SectionIntro from '../../molecules/sections/SectionIntro';
import SectionProjects from '../../molecules/sections/SectionProjects';
import SectionProject1 from '../../molecules/sections/SectionProject1';
import SectionProject2 from '../../molecules/sections/SectionProject2';
import GitHub from '../../atoms/images/github.png';
import Image1 from '../../atoms/images/image1.svg';
import Image2 from '../../atoms/images/image2.svg';
import BlogTema from '../../atoms/images/tema.gif';
import BlogMenu from '../../atoms/images/menu.gif';
import BlogSass from '../../atoms/images/sass.gif';

function Main() {
    return (
        <Fragment>

            <section id="Main"></section>

            <SectionIntro
                title = 'Cuando quieras y donde quieras'
                subtitle = 'Todas las páginas están diseñadas para que las disfrutes en tu pantalla favorita. Ya sea tu TV, tableta, computadora, o teléfono.'
            />
            <SectionIntro
                title = 'Detrás de cámaras y descargas ilimitadas'
                subtitle = '¡Código libre y bien documentado! Todas las páginas están disponibles en GitHub. Puedes descargar o clonar los repositorios cuantas veces quieras.'
                logo = {GitHub}
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
                'Todos los post están escritos en formato Markdown. Con un clic se alojan en GitHub. Automáticamente, un generador de plantillas los convierte en HTML y los publica en "GitHub Pages".'
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
                'Hecho con React.js y mucha esperanza'
                image_0={Image1}

                title_1=
                'Este título es un componente reutilizable'
                subtitle_1=
                'Incluso este párrafo es un componente reutilizable. Esta es la magia de React.js que permite crear componentes fáciles de reutilizar.'
                image_1={Image1}
                button_1='React.js'

                title_2=
                'Este título se actualiza al hacer clic en un botón'
                subtitle_2=
                'Los "Hooks" permiten actualizar el estado de un componente sin tener que escribir una clase. No parece gran cosa pero, ahora, el código es más limpio y legible.'
                image_2={Image2}
                button_2='Hooks'

                title_3=
                'Diseño atómico, "a-tó-mi-co".'
                subtitle_3=
                'Todos los componentes están organizados utilizados con la metodología del "diseño atómico". La cual facilita la reutilización del código y agiliza los posibles cambios visuales.'
                image_3={Image1}
                button_3='Atómico'

                button_4='Sinopsis'
                button_5='Ver ahora ▶'
                button_6='Repositorio ▶'
            />
            <section>Un vistazo a los próximos lanzamientos</section>
            <SectionProjects
                title=
                'API'
                subtitle=
                'Ajax y WebSockets'
                image0={Image1}

                title1=
                'API'
                subtitle1=
                'Ajax y WebSockets'
                image1={Image2}
                button1='API'

                title2=
                'JavaScript puro'
                subtitle2=
                'Una app escrita con JavaScript puro. Programación orientada a objetos.'
                image2={Image1}
                button2='JavaScript'

                title3=
                'Portafolio - Segunda Temporada'
                subtitle3=
                'Mejorar el código'
                image3={Image2}
                button3='Portafolio 2'

                title4=
                'Blog - Segunda Temporada'
                subtitle4=
                'Mejorar el código'
                image4={Image1}
                button4='Blog 2'

                title5=
                'Alojado en "GitHub Pages"'
                subtitle5=
                'Jekyll y GitHub Pages convierten los archivos tipo markdown en HTML.'
                image5={Image1}
                button5='GitHub'

                title6=
                'Enlaces internos markdown'
                subtitle6=
                'Todos los post están enlazados internamente, y sus links funcionan offline.'
                image6={Image1}
                button6='Offline'
            />
            <section id="About">Acerca de</section>
        </Fragment>
    )
}

export default Main;