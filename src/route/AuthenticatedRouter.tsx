import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// 後ほどHooksに置き換えてみよう
import { connect } from 'react-redux'
import { AppState } from 'store'

interface AutenticatedRouterProps {
  component: React.ComponentType<any>
  exact?: boolean
  path: string
  uid: string
}

const isAuthenticated = (uid: string) => uid !== ''

const AutenticatedRouter = ({
  // 分割代入(destructing)のrename, jsxでコンポーネントは大文字
  component: Component,
  uid,
  ...props
}: AutenticatedRouterProps) => {
  // login後でも、URL直叩きでアクセスするとfirebaseのobserveが完了するまでは、未認証になっちゃう
  // やっぱり、認証中モーダルが必要かな
  if (isAuthenticated(uid)) {
    // Routeでrenderパターンの場合、historyとかlocationはrenderPropsの引数で受け取る
    return (
      <Route
        {...props}
        render={renderProps => <Component {...renderProps} />}
      />
    )
  }

  return <Redirect to="/" />
}

export default connect((state: AppState) => state.authState)(AutenticatedRouter)
