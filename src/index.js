import React from 'react'
import {render} from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'

const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
