import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Bagge'


const container = document.getElementById('root');

ReactDOM.render(<Badge 
    firstName= 'Freda' 
    lastName = 'Grady'
    avatarUrl= 'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon'
    email = 'Leann_Berge@gmail.com'
    jobTitle = 'Legacy Brand Director'
    twitter = 'jaidenmeiden'/>, container);