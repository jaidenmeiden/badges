import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Jaiden';
const element = (
    <div>
        <h1>Hello, {name}</h1>     
        <p>Sony ingeniero industrail desarrollador!</p>
    </div>
);
const container = document.getElementById('root');

ReactDOM.render(element, container);