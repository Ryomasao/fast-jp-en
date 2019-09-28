import React, { useEffect } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Button from 'components/atoms/Button'
import { Color } from 'const'
import { googleLogin, logout, fireBaseAuthObserver } from 'services/auth'
import { AuthState, User, UserStatus } from 'services/auth/model'

interface HeaderProps {
  className?: string
  signIn: (user: User) => void
  signOut: () => void
  authState: AuthState
}

const headerStyle = css({
  display: 'flex',
  backgroundColor: Color.BACKGROUND_HEADER,
})

const Header: React.FC<HeaderProps> = ({
  className,
  signIn,
  signOut,
  authState,
}) => {
  useEffect(() => {
    fireBaseAuthObserver(signIn, signOut)
    // eslint-disable-next-line
  }, [])

  const { userStatus } = authState

  // 親コンポーネントからもらう値でスタイルを書きたい
  // functionの中に書いてもパフォーマンス的に問題ないのかな？
  return (
    <header css={headerStyle} className={className}>
      header
      {userStatus === UserStatus.authenticated ? (
        <Button text="Logout" onClick={() => logout()} />
      ) : userStatus === UserStatus.guest ? (
        <Button text="Login" onClick={() => googleLogin()} />
      ) : (
        <Button text="Loading" onClick={() => {}} />
      )}
    </header>
  )
}

export default Header
