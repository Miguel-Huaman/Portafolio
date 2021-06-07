import React from 'react'
import H1 from '../../atoms/text/H1'
import H2 from '../../atoms/text/H2'
import './Banner.css'

function Banner(props) {
    return (
        <div className="banner">
            <H1 text={props.title} />
            <H2 text={props.subtitle} />
        </div>
    )
}

export default Banner;