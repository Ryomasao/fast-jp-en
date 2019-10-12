import React from 'react'
import * as H from 'history'
import { AuthState } from 'services/auth/model'
import {useDispatch, useSelector} from 'react-redux'
import {signOut} from 'store/auth/actions'
import SideMenu from './SideMenu'

interface OwnProps {
  isShow: boolean
  closeSideMenu: () => void
  history: H.History
}

export default (props: OwnProps) => {
  const dispatch = useDispatch()
  const out = () => dispatch(signOut())
  const state = useSelector((state: AuthState)=> state)

  return <SideMenu  {...props} authState={state} signOut={out}/>
}


