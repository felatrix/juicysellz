import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'

import root_reducer from './root-reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [logger]
const composeWithEnhancers = composeWithDevTools({trace:true})

const store = createStore(root_reducer,composeWithEnhancers(applyMiddleware(...middlewares)))

export default store