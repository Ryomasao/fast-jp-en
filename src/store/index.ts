import { createStore, combineReducers } from 'redux'
import wordReducer from './word/reducer'

const rootReducer = combineReducers({
  wordState: wordReducer,
})

const store = createStore(rootReducer)

export type AppState = ReturnType<typeof rootReducer>

export default store
