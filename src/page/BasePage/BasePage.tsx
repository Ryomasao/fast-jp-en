import React, { useEffect } from 'react'
import { User } from 'services/auth/model'
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

export default BasePage
