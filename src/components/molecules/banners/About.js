import React from 'react'
import MainSubtitle from '../../atoms/text/MainSubtitle'
import './About.css'

const externalLink1 = () => {
    window.open('https://www.linkedin.com/in/desarrollador-react-programador-miguel-huaman/', 'self')
}

const externalLink2 = () => {
    window.open('https://github.com/Miguel-HH', 'self')
}

function About(props) {
    return (
        <div className="about">
            <section id="About"></section>
            <MainSubtitle text={props.title} />
            <img src={props.foto} alt="foto" />
            <p>Hola, Soy Miguel Angel Huamán <br></br> Aficionado al desarrollo web</p>
            <p>Esta página está hecha con React.js</p>
            <p>Puedes encontrarme en estas redes sociales:</p>
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