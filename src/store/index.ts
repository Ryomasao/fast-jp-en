import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySaga from 'sagas/word'
import authReducer from 'store/auth/reducer'
import wordReducer from 'store/sentences/reducer'

const rootReducer = combineReducers({
  wordState: wordReducer,
  authState: authReducer,
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware))
sagaMiddleware.run(mySaga)

export type AppState = ReturnType<typeof rootReducer>

export default store
