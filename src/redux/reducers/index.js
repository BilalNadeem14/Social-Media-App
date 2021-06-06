import {combineReducers} from 'redux'
import GeneralReducer from './GeneralReducer'
import authReducer from './authReducer'

export default combineReducers({
    GeneralReducer: GeneralReducer,
    authReducer: authReducer
})