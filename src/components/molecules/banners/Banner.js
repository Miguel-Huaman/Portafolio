import React from 'react'
import MainTitle from '../../atoms/text/MainTitle'
import MainSubtitle from '../../atoms/text/MainSubtitle'
import MainDescription from '../../atoms/text/MainDescription'
import ButtonSubscription from '../../atoms/buttons/ButtonSubscription'
import './Banner.css'

function Banner(props) {
    return (
        <div className="banner">
            <MainTitle text={props.title} />
            <MainSubtitle text={props.subtitle} />
            <ButtonSubscription text={props.button} />
            <MainDescription text={props.description} />
        </div>
    )
}

export default Banner;