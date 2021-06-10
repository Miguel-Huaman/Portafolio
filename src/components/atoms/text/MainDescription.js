import React from 'react'
import './MainDescription.css'

function MainDescription(props) {
    return (
        <p className="MainDescription">{props.text}</p>
    )
}

export default MainDescription;