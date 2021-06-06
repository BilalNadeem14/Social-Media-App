import {REHYDRATE} from 'redux-persist'

import types from '../actions/actionTypes'
import initialState from './initialStates'
const INITIAL_STATE = initialState.mainReducer

const GeneralReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case REHYDRATE: {
            return state
        }
        case types.loaderOn: {
            console.log('types.loaderOn called');
            return {
                ...state,
                loading: true
            }
        }
        case types.loaderOff: {
            return {
                ...state,
                loading: false
            }
        }
        // case types.LOGIN: {
        //     return {
        //         ...state,
        //         loading: false
        //     }
        // }
        // case types.SIGN_UP: {
        //     return {
        //         ...state,
        //         loading: false
        //     }
        // }
        
        default:
            return state

    }
}

export default GeneralReducer