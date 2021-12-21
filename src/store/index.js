import { createStore, applyMiddleware } from 'redux'
import { compose } from 'redux'
import { reducer } from './reducers/listReducer'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = createStore(reducer,
    composeEnhancers(applyMiddleware(thunk)))