import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TopPage from 'page/TopPage'
import WordListPage from 'page/WordListPage'
import RegisterPgae from 'page/RegisterPage'

const AppRoute: React.FC = () => (
  <Router>
    <Route exact path="/" component={TopPage} />
    <Route path="/sentences" component={WordListPage} />
    <Route path="/admin/sentences" component={RegisterPgae} />
  </Router>
)

export default AppRoute
