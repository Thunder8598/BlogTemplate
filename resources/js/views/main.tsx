import React from 'react';
import ReactDOM from 'react-dom';

import Application from "./Application";

function Main() {
    return (
        <>
            <Application />
        </>
    );
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
