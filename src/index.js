import React, { Fragment} from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './pages/Portfolio'

function App() {
    return (
        <Fragment>
            <Portfolio />
        </Fragment>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);