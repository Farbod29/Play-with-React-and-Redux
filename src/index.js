import React from 'react';
import ReactDOM from 'react-dom';
import '/Users/farbodaprin/Desktop/exersise/src/index.css';
import App from './Container/App';
import registerServiceWorker from './registerServiceWorker';
//import Bootstrap from 'bootstrap/dist/css/bootstrap-grid.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

