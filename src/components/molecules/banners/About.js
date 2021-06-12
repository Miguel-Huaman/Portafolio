import React from 'react'
import MainTitle from '../../atoms/text/MainTitle'
import './About.css'

function About(props) {
    return (
        <div className="about">
            <MainTitle text={props.title} />
            <img src={props.foto} alt="foto" />
            <p>Hola, Soy Miguel Angel Huamán</p>
            <p>Aficionado al desarrollo web</p>
            <p>Esta página está hecha con React.js</p>
        </div>
    )
}

export default About;