import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function tick() {
    const element2_1 = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element2_1,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);
