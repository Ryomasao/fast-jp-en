import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
// 型定義
// eslint-disable-next-line import/no-extraneous-dependencies
import * as H from 'history'
import { AuthState } from 'services/auth/model'
import Overlay from 'components/molecule/Overlay'
import OutsideClickHandler from 'react-outside-click-handler'
import { logout } from 'services/auth'

interface SideMenuProps {
  isShow: boolean
  closeSideMenu: () => void
  authState: AuthState
  signOut: () => void
  history: H.History
}

const SideMenu: React.FC<SideMenuProps> = ({
  isShow,
  closeSideMenu,
  signOut,
}) => {
  const left = isShow ? '0' : '-250px'

  return (
    <React.Fragment>
      <Overlay isShow={isShow} />
      <OutsideClickHandler onOutsideClick={() => isShow && closeSideMenu()}>
        <div
          css={{
            height: '100vh',
            width: '250px',
            position: 'absolute',
            top: '-60px',
            left,
            transition: '0.5s',
            backgroundColor: '#fff',
          }}
        >
          <ul
            onClick={() => {
              // TODO sagaに寄せた方がいいかも
              logout()
              signOut()
              closeSideMenu()
            }}
          >
            ログアウト
          </ul>
        </div>
      </OutsideClickHandler>
    </React.Fragment>
  )
}

export default SideMenu
