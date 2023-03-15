import loginReducer from './loginSlice'
import menuReducer from './menuSlice'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    login: loginReducer,
    menu: menuReducer
})
  
export default rootReducer
