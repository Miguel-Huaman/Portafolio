import React from 'react'
import MainSubtitle from '../../atoms/text/MainSubtitle'
import './About.css'

function About(props) {
    return (
        <div className="about">
            <MainSubtitle text={props.title} />
            <img src={props.foto} alt="foto" />
            <p>Hola, Soy Miguel Angel Huamán</p>
            <p>Aficionado al desarrollo web</p>
            <p>Esta página está hecha con React.js</p>
        </div>
    )
}

export default About;