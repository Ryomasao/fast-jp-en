import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import wordReducer from './word/reducer'

const rootReducer = combineReducers({
  wordState: wordReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppState = ReturnType<typeof rootReducer>

export default store
