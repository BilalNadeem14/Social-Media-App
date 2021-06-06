import {REHYDRATE} from 'redux-persist'
import types from '../actions/actionTypes'
import initialState from './initialStates'

const INITIAL_STATE = initialState.authReducer

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case REHYDRATE: {
            return state
        }
        
        case types.LOGIN:
            return {...state}
        
        case types.LOGOUT:
            return {...initialState}
        
        case types.SET_IMAGE:
            console.log('auth reducer image: ', action.payload)
            return {...state, image: action.payload}
        
        case types.UPDATE_PROFILE:
            return {...state}
            // return {...state, user: {...state.user, image: action.payload.image, first_name: action.payload.first_name, last_name: action.payload.last_name, address: action.payload.address}}

        case types.GET_PROFILE:
            return {...state, user: action.payload, image: null}
        
        default:
            return state
    }
}