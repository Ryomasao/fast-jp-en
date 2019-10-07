import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configuredStore from './store';
// react-routerとreact-router-domってどっち使えばいいんだっけ？
// →rect-router-domがreact-routerを含んでる
import AppRouter from './route';

// SPAであれば、storeは共通で持つのでProviderはここにあってもいいと思う
// MPAであれば、Page配下のindex.tsでstoreをつくればいいかな
ReactDOM.render(
  <Provider store={configuredStore}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
