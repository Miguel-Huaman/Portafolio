import React from 'react'
import MainTitle from '../../atoms/text/MainTitle'
import MainSubtitle from '../../atoms/text/MainSubtitle'
import MainDescription from '../../atoms/text/MainDescription'
import './Banner.css'
import '../../atoms/buttons/ButtonSubscription.css'

function Banner(props) {
    return (
        <div className="banner">
            <div className="topBanner">
            </div>
            <div className="container">
                <MainTitle />
                <MainSubtitle />
                <a className="ButtonSubscription" href='#About'>
                    {props.button}
                </a>
                <a className="arrow" href='#Main'> </a>
                <div className="carousel">
                    <img src={props.poster} width="2000" height="600" alt="poster frontend" />
                    <img src={props.poster} width="2000" height="600" alt="poster frontend" />
                    <img src={props.poster} width="2000" height="600" alt="poster frontend" />
                </div>
            </div>
            <MainDescription text={props.description} />
        </div>
    )
}

export default Banner;