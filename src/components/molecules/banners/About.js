import React from 'react'
import './About.css'

const externalLink1 = () => {
    window.open('https://www.linkedin.com/in/desarrollador-react-programador-miguel-huaman/', 'self')
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
                    Hasta ahora recuerdo el día que escribí mi primera línea de código. Quedé maravillado cuando la pantalla renderizó lo que yo había escrito.<br></br><br></br>
                    Ahora tenía un nuevo hobby que pronto se convertiría en una obsesión, pues me pasé navidad y año nuevo diseñando páginas web. En ese momento yo sólo quería tener más tiempo libre para programar...
                </div>
                <div className="year">2021</div>
                <div>
                    ¡Deseo concedido! Me quedé desempleado y eso me dio mucho tiempo para estudiar JavaScript. Me contagié de COVID y comencé a escribir un blog. Pero lo más importante es que ingresé al programa de becas en EDteam. Ahí conocí muchos programadores y diseñadores de toda latinoamérica.<br></br><br></br>
                    Un día escuché que "Un autodidacta con un buen portafolio puede conseguir un trabajo como desarrollador web". Ese mismo día me puse a diseñar este portafolio.
                </div>
            </div>
            <h3>
                Gracias por llegar hasta aquí. Si quieres contactarme, aquí están mis redes sociales.
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