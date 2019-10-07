import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Button from 'components/atoms/Button'
import { Color } from 'const'
import { logout } from 'services/auth'
import { AuthState, UserStatus } from 'services/auth/model'

interface HeaderProps {
  className?: string
  authState: AuthState
}

const headerStyle = css({
  display: 'flex',
  backgroundColor: Color.BACKGROUND_HEADER,
})

const Header: React.FC<HeaderProps> = ({
  className,
  authState,
}) => {

  const { userStatus } = authState

  // 親コンポーネントからもらう値でスタイルを書きたい
  // functionの中に書いてもパフォーマンス的に問題ないのかな？
  return (
    <header css={headerStyle} className={className}>
      {userStatus === UserStatus.authenticated && (
        <Button text="Logout" onClick={() => logout()} />
      )}
    </header>
  )
}

export default Header
