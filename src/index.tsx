import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configuredStore from './store'
import { App } from './App'

// SPAであれば、storeは共通で持つのでProviderはここにあってもいいと思う
// MPAであれば、Page配下のindex.tsでstoreをつくればいいかな
ReactDOM.render(
  <Provider store={configuredStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
