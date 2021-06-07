import React from 'react'
import MainTitle from '../../atoms/text/MainTitle'
import MainSubtitle from '../../atoms/text/MainSubtitle'
import './Banner.css'

function Banner(props) {
    return (
        <div className="banner">
            <MainTitle text={props.title} />
            <MainSubtitle text={props.subtitle} />
        </div>
    )
}

export default Banner;