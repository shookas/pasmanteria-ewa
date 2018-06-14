import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import './responsiveness.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const config = require('./app-config.json');

ReactDOM.render(
  <Router>
    <App config={config} />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();