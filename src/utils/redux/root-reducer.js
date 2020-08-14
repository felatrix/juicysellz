import {combineReducers} from 'redux'

import SetUserReducer from './user/setUser.reducer'
import orderReducer from './order/order.reducer'

const root_reducer = combineReducers({
    user:SetUserReducer,
    order:orderReducer
})

export default root_reducer