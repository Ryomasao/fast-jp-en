import React from 'react'
/** @jsx jsx */
// eslint-disable-next-line import/no-extraneous-dependencies
import * as H from 'history'
import { css, jsx } from '@emotion/core'
import Button from 'components/atoms/Button'
import CircleImage from 'components/atoms/CircleImage'
import { Color } from 'const'
import { logout } from 'services/auth'
import { AuthState, UserStatus } from 'services/auth/model'

interface HeaderProps {
  className?: string
  authState: AuthState
  history: H.History
  location: H.Location
}

const Header: React.FC<HeaderProps> = ({ className, authState, history }) => {
  const { userStatus, photoURL } = authState

  const transitionPage = (url: string) => {
    history.push(url)
  }

  return (
    <header css={headerStyle} className={className}>
      {userStatus === UserStatus.authenticated && (
        <div css={{ width: '100%' }}>
          <CircleImage url={photoURL} />
          <Button text="Logout" onClick={() => logout()} />
        </div>
      )}

      {userStatus === UserStatus.guest && (
        <Button
          size="sm"
          primary
          text="ログイン"
          onClick={() => transitionPage('/login')}
        />
      )}
    </header>
  )
}

const headerStyle = css({
  display: 'flex',
  backgroundColor: Color.BACKGROUND_HEADER,
  justifyContent: 'flex-end',
})

export default Header
