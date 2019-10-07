import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopPage from 'page/TopPage'
import WordListPage from 'page/WordListPage'
import RegisterPgae from 'page/RegisterPage'
import LoginPage from 'page/LoginPage'
import GuestRouter from './GuestRouter'
import AuthenticatedRouter from './AuthenticatedRouter'

// 毎回忘れる
// exact: これがないと、 /sentences としたいところ、 /sentences/hoge でもマッチすることになる
// Switch: v4から、pathにマッチするRouteを全部表示するようになってる。大抵は排他的にしたいのでSwitchをつける
export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={TopPage} />
      <AuthenticatedRouter exact path="/sentences" component={WordListPage} />
      <AuthenticatedRouter
        exact
        path="/admin/sentences"
        component={RegisterPgae}
      />
      <GuestRouter exact path="/login" component={LoginPage} />
    </Switch>
  </Router>
)
