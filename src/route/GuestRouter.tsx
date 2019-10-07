import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// 後ほどHooksに置き換えてみよう
import { connect } from 'react-redux'
import { AppState} from 'store'

interface AutenticatedRouterProps {
  component: React.ComponentType<any>
  exact?: boolean
  path: string
  uid: string
}

const isAuthenticated = (uid:string) => uid !== ''

const GuestRouter = ({
  component: Component,
  uid,
  ...props
}: AutenticatedRouterProps
) => {
  if(isAuthenticated(uid)) {
    return <Redirect to="/"/>
  } else {
    return <Route {...props} render={(renderProps) => <Component {...renderProps}/>} />
  }
}

export default connect((state:AppState)  => state.authState)(GuestRouter)
