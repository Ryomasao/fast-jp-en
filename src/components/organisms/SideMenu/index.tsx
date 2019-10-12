import React from 'react'
import * as H from 'history'
import { useDispatch } from 'react-redux'
import { signOut } from 'store/auth/actions'
import SideMenu from './SideMenu'

interface OwnProps {
  isShow: boolean
  closeSideMenu: () => void
  history: H.History
}

export default (props: OwnProps) => {
  const dispatch = useDispatch()
  const dispatchSignOut = () => dispatch(signOut())

  return <SideMenu {...props} signOut={dispatchSignOut} />
}
