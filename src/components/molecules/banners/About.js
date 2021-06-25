import React from 'react'
import './About.css'

const externalLink1 = () => {
    window.open('https://www.linkedin.com/in/miguel-huaman-desarrollador-frontend-react/', 'self')
}

const externalLink2 = () => {
    window.open('https://github.com/Miguel-HH/', 'self')
}

function About(props) {
    return (
        <div className="about">
            <section id="About"></section>
            <h2>Hola, soy Miguel Angel Huamán.</h2>
            <img src={props.foto} alt="foto" />
            <div className="table">
                <div className="year">2020</div>
                <div>
                    <p>
                        Hasta ahora recuerdo el día que escribí mi primera línea de código. Quedé maravillado cuando la pantalla renderizó lo que yo había escrito.
                    </p>
                    <p>
                        Mientras más estudiaba JavaScript, menos tiempo tenía para ver series o películas. De pronto, todo mi tiempo libre era para diseñar páginas web. Navidad y año nuevo incluidos. En ese momento yo sólo quería tener más tiempo libre para programar...
                    </p>
                </div>
                <div className="year">2021</div>
                <div>
                    <p>
                        ¡Deseo concedido! Me quedé desempleado y eso me dio mucho tiempo para estudiar React. Pero lo más importante es que ingresé al programa de becas en EDteam. Ahí conocí muchos programadores y diseñadores de toda latinoamérica.
                    </p>
                    <p>
                        Un día escuché que "Un autodidacta con un buen portafolio puede conseguir un trabajo como desarrollador web". Ese mismo día me puse a diseñar este portafolio.
                    </p>
                </div>
            </div>
            <h3>
                Gracias por llegar hasta aquí. Si quieres contactarme, estas son mis redes sociales.
            </h3>
            <div className="buttonContainer">
                <button className="ButtonSubscription" onClick={externalLink1}>
                    LinkedIn
                </button>
                <button className="ButtonSubscription" onClick={externalLink2}>
                    GitHub
                </button>
            </div>
        </div>
    )
}

export default About;