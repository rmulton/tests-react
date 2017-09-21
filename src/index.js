import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import allReducers from './reducers/main'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(allReducers, composeWithDevTools())

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root'));
registerServiceWorker();
