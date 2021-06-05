import React, { Fragment} from 'react';
import ReactDOM from 'react-dom';
import Button from './components/atoms/buttons/Button.js'
import Text from './components/atoms/text/Text.js'

function Welcome(props) {
    return <h1>Hola, {props.name}</h1>;
}

function App() {
    return (
        <Fragment>
            <Button content="Botón"/>
            <Text content="Hola"/>
            <Text content="Miguel"/>
        </Fragment>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);