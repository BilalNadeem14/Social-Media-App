import {REHYDRATE} from 'redux-persist'
import types from '../actions/actionTypes'
import initialState from './initialStates'

const INITIAL_STATE = initialState.authReducer

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case REHYDRATE: {
            return state
        }

        case types.SIGN_UP:
            console.log('action.payload: ', action.payload);
            let newUser = true
            state.users.map((val) => {
                if(action.payload.email == val.email){
                    newUser = false
                }
                else {
                    newUser = true
                }
            })
            if(newUser){
                return {...state, users: [...state.users, {...action.payload}], image: {}}
            }
            else{
                return {...state}
            }

        case types.LOGIN:
            console.log('action.payload: ', action.payload);
            let userExist = false
            let userIndex = 0
            state.users.map((val, index) => {
                if(action.payload.email == val.email && action.payload.email == val.email){
                    console.log('user exists');
                    userExist = true
                    userIndex = index
                }
            })
            if(userExist) {
                return {...state, user: state.users[userIndex], loggedIn: true}
            }
            else{
                return {...state}
            }
        
        case types.LOGOUT:
            return {...state, user: {}, image: {}}
            // {...initialState}
        
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