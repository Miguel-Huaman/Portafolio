import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <button>{props.content}</button>
    )
}

export default Button;