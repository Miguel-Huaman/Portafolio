import React from 'react'
import H1 from '../../atoms/text/H1'
import H2 from '../../atoms/text/H2'
import './About.css'

function About(props) {
    return (
        <div className="about">
            <H1 text={props.title} />
            <img src={props.foto} alt="foto" />
            <H2 text={props.subtitle} />
        </div>
    )
}

export default About;