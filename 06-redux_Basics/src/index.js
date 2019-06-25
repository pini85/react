import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
                <Provider store ={createStore(reducers)}>     
                <App />
                </Provider>,  
                 document.querySelector('#root'));

//Provider is a react-redux component that gets the data from the redux store and a connect function(component) will talk with the provider to pass in the data