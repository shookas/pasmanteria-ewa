import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './responsiveness.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const config = require('./app-config.json');

ReactDOM.render(<App config={config}/>, document.getElementById('root'));
registerServiceWorker();
