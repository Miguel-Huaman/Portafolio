---
title: "Botón reusable para React"
date: 2021-06-05
tags: react
---

# Botón reusable para React

````jsx
import React from 'react'
import './Button.scss'

function Button(props) {
    return (
        <button>{props.content}</button>
    )
}

export default Button;
````

## Llamar al botón desde index.js

````jsx
// index.js
import React, { Fragment} from 'react';
import ReactDOM from 'react-dom';
import Button from './components/atoms/buttons/Button.js'

function App() {
    return (
        <Fragment>
            <Button content="Botón"/>
        </Fragment>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
````
