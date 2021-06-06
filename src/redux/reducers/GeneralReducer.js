import {REHYDRATE} from 'redux-persist'

import actionTypes from '../actions/actionTypes'
import initialState from './initialStates'
const INITIAL_STATE = initialState.mainReducer

const GeneralReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case REHYDRATE: {
            return state
        }
        case actionTypes.loaderOn: {
            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.loaderOff: {
            return {
                ...state,
                loading: false
            }
        }
        
        default:
            return state

    }
}

export default GeneralReducer