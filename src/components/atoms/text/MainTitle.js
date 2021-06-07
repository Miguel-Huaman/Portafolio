import React from 'react'
import './MainTitle.css'

function MainTitle(props) {
    return (
        <h1 className="mainTitle">{props.text}</h1>
    )
}

export default MainTitle;