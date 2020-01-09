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

import React from 'react';
import ReactDOM from 'react-dom';

//Opción JSX A
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
const jsx1 = <h1>Hello, Jaiden 1</h1>;
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
//Opción JSX B
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
const name1 = 'Jaiden';
const jsx2 = <h1>Hello, {name1} 2</h1>;
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
//Opción JSX C
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
const sum  = () => 3 + 3;
const jsx3 = <h1>La suma es: {sum()}</h1>;
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
//Opción JSX D
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
const jsx4 = <h1>Valores nulos: {false}, {null}, {0}, {undefined}</h1>;
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
//Opción JSX E
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
const jsx5 = (
    <div>
        <h1>Hello, {name1}</h1>     
        <p>Sony ingeniero industrail desarrollador!</p>
    </div>
);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
//Opción createElement A
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
const element1 = React.createElement('h1', {}, 'Hello, Jaiden 3');
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
//Opción createElement B
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
const element2 = React.createElement('a', {href: 'https://www.nike.com/cl/'}, 'Hello, Jaiden 4');
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
//Opción createElement C
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
const name2 = 'Jaiden';
const element3 = React.createElement('h1', {}, `Hello, ${name2} 5`);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++


const container = document.getElementById('root');

ReactDOM.render(jsx5, container);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// Utilizando react predeterminado
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
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
*/
