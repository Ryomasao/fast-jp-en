import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { AuthState } from 'services/auth/model'
import Overlay from 'components/molecule/Overlay'
import OutsideClickHandler from 'react-outside-click-handler'

interface SideMenuProps {
  isShow: boolean
  closeSideMenu: () => void
  authState: AuthState
  signOut: () => void
}

const SideMenu: React.FC<SideMenuProps> = ({ isShow, closeSideMenu }) => {
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
          <ul>ログアウト</ul>
        </div>
      </OutsideClickHandler>
    </React.Fragment>
  )
}

export default SideMenu
