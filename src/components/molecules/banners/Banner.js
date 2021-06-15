import React from 'react'
import MainTitle from '../../atoms/text/MainTitle'
import MainSubtitle from '../../atoms/text/MainSubtitle'
import MainDescription from '../../atoms/text/MainDescription'
import './Banner.css'
import '../../atoms/buttons/ButtonSubscription.css'

function Banner(props) {
    return (
        <div className="banner">
            <MainTitle text={props.title} />
            <MainSubtitle text={props.subtitle} />
            <button className="ButtonSubscription">
                <a href='#About'>{props.button}</a>
            </button>
            <MainDescription text={props.description} />
            <a className="arrow" href='#Main'> </a>
            <div className="carousel">
                <img src={props.backgroundImage} alt="posters" />
                <img src={props.backgroundImage} alt="posters" />
            </div>
        </div>
    )
}

export default Banner;