import React from 'react'
import './MainSubtitle.css'

function MainSubtitle(props) {
    return (
        <h2 className="mainSubtitle">{props.text}</h2>
    )
}

export default MainSubtitle;