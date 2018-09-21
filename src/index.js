import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

import MyApp from './myApp';


ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
