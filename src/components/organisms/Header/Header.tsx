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

// うーん、テンプレートはcontainer(page)の粒度で扱ったほうがよい気がしてきた
const Header: React.FC<HeaderProps> = ({
  className,
  authState,
  history,
  location,
}) => {
  // Headerにボタンを表示させるとかのロジックをHeaderの中に持たせるのはちょっと違う気がする
  const { userStatus, photoURL } = authState
  const { pathname } = location

  const transitionPage = (url: string) => {
    history.push(url)
  }

  const showLoginButton = () => {
    if (pathname === '/login') return false
    if (userStatus !== UserStatus.guest) return false

    return true
  }

  return (
    <header css={headerStyle} className={className}>
      {userStatus === UserStatus.authenticated && (
        <div css={{ width: '100%' }}>
          <CircleImage url={photoURL} />
          <Button text="Logout" onClick={() => logout()} />
        </div>
      )}

      {showLoginButton() && (
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
