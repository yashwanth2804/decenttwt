import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index';
import { Provider } from "react-redux";

ReactDOM.render( <Provider store={store} >
    <App1/> 
</Provider>, document.getElementById('root'));
registerServiceWorker();
