import thunk from 'redux-thunk'
import reducer from './reducers'
import {persistReducer, persistStore} from 'redux-persist'
import {createStore,applyMiddleware} from 'redux'
import utils from '../utils'
const persistedReducer = persistReducer(utils.persistConfig, reducer)
export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)