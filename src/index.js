import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

{/*creating Element*/}
const greet=<h1>Hey There</h1>
ReactDOM.render(greet, document.getElementById('root'));{/*calling Element=greet to root*/}
registerServiceWorker();
