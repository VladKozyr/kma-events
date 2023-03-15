import loginReducer from './loginSlice'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    login: loginReducer
})
  
export default rootReducer
