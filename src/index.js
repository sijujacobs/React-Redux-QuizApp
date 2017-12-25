import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import quizReducer from './reducers/quizReducer';

    let defaultState = {
        question : {},
        totalPoints : 0,
        selectedAnswerId : 0,
        selectedAnswers : []
    }
    const store = createStore(quizReducer, defaultState);

    store.subscribe(function fetcher() {
    })
    
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'));

    registerServiceWorker();











   
//import configureStore from './store/configureStore';
//import rootReducer from './reducers';
//const store = configureStore();
