import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Dispatch } from 'redux'
import { User, AuthState, UserStatus } from 'services/auth/model'
import { AppState } from 'store'
import { connect } from 'react-redux'
import { signIn, signOut } from 'store/auth/actions'
import { fireBaseAuthObserver } from 'services/auth'
import LoadingModal from 'components/organisms/LoadingModal'

import Router from 'route'

interface PageProps {
  signIn: (user: User) => void
  signOut: () => void
  authState: AuthState
}

const App: React.FC<PageProps> = ({ signIn, signOut, authState }) => {
  useEffect(() => {
    fireBaseAuthObserver(signIn, signOut)
    // eslint-disable-next-line
  }, [])

  return authState.userStatus === UserStatus.unknown ? (
    ReactDOM.createPortal(
      <LoadingModal isShow css={{ top: 0 }} />,
      document.getElementById('loading') as HTMLElement,
    )
  ) : (
    <Router />
  )
}

const mapStateToProps = (state: AppState) => {
  return state
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signIn: (user: User) => dispatch(signIn(user)),
  signOut: () => dispatch(signOut()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
