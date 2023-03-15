import loginReducer from './loginSlice'
import menuReducer from './menuSlice'
import userReducer from './usersSlice'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    login: loginReducer,
    menu: menuReducer,
    user: userReducer
})
  
export default rootReducer
