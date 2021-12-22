import { createStore, applyMiddleware } from 'redux'
import { compose, combineReducers } from 'redux'
import { lists } from './reducers/listReducer'
import { items } from './reducers/itemReducer'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const rootReducer = combineReducers({ lists, items})


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))