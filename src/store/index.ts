import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySaga from 'sagas/sentences'
import authReducer from 'store/auth/reducer'
import wordReducer from 'store/sentences/reducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const rootReducer = combineReducers({
  wordState: wordReducer,
  authState: authReducer,
})

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware)),
)
sagaMiddleware.run(mySaga)

export type AppState = ReturnType<typeof rootReducer>

export default store
