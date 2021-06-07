import React from 'react'
import MainTitle from '../../atoms/text/MainTitle'
import MainSubtitle from '../../atoms/text/MainSubtitle'
import './About.css'

function About(props) {
    return (
        <div className="about">
            <MainTitle text={props.title} />
            <img src={props.foto} alt="foto" />
            <MainSubtitle text={props.subtitle} />
        </div>
    )
}

export default About;