import React from 'react'
/** @jsx jsx */
// eslint-disable-next-line import/no-extraneous-dependencies
import * as H from 'history'
import { css, jsx } from '@emotion/core'
import Button from 'components/atoms/Button'
import { Color } from 'const'
import { logout } from 'services/auth'
import { AuthState, UserStatus } from 'services/auth/model'

interface HeaderProps {
  className?: string
  authState: AuthState
  history?: H.History
}

const headerStyle = css({
  display: 'flex',
  backgroundColor: Color.BACKGROUND_HEADER,
})

const Header: React.FC<HeaderProps> = ({ className, authState }) => {
  const { userStatus } = authState

  return (
    <header css={headerStyle} className={className}>
      {userStatus === UserStatus.authenticated && (
        <Button text="Logout" onClick={() => logout()} />
      )}

      {userStatus === UserStatus.guest && (
        <Button text="login" onClick={() => {}} />
      )}
    </header>
  )
}

export default Header
