import { createStore, combineReducers } from 'redux'
import wordReducer from './word/reducer'

const store = createStore(
  combineReducers({
    word: wordReducer,
  }),
)

export default store
