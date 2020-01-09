// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// Ejecutar JavaScript para mostrar la pagian principal
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
const element = document.createElement('h1');
element.innerText = "Hello, Jaiden 1";

const container = document.getElementById('root');

container.appendChild(element);
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// Utilizando react modificado
// ++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, Jaiden 2</h1>;

const container = document.getElementById('root');

ReactDOM.render(element, container);
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// Utilizando react predeterminado
// ++++++++++++++++++++++++++++++++++++++++++++++++++++

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
