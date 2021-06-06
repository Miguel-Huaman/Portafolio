import React, { Fragment} from 'react';
import ReactDOM from 'react-dom';
import Background1 from './components/atoms/backgrounds/Background1.js'
import Div from './components/molecules/divs/Div.js'

function App() {
    return (
        <Fragment>
            <Background1 />
            <Div content="Hola"/>
        </Fragment>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);