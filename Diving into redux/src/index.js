import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //Used to access the Provider Component
import './index.css';
import App from './App';

import store from './store/index'; //import store into index.js 

//the store is provided as an prop to the provider
// the <Provider /> wraps <App /> component
ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));
