import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySaga from 'sagas/word'
import wordReducer from './sentences/reducer'

const rootReducer = combineReducers({
  wordState: wordReducer,
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware))
sagaMiddleware.run(mySaga)

export type AppState = ReturnType<typeof rootReducer>

export default store
