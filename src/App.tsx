import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import { User } from 'services/auth/model'
import { connect } from 'react-redux'
import { signIn, signOut } from 'store/auth/actions'
import { fireBaseAuthObserver } from 'services/auth'
import Router from 'route'

interface PageProps {
  signIn: (user: User) => void
  signOut: () => void
}

const BasePage: React.FC<PageProps> = ({ signIn, signOut }) => {
  useEffect(() => {
    fireBaseAuthObserver(signIn, signOut)
    // eslint-disable-next-line
  }, [])

  return <Router />
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signIn: (user: User) => dispatch(signIn(user)),
  signOut: () => dispatch(signOut()),
})

export default connect(
  null,
  mapDispatchToProps,
)(BasePage)
