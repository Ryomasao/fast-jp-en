import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { AuthState } from 'services/auth/model'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import MainTemplate from 'components/template/Main'
import Button from 'components/atoms/Button'
import { googleLogin } from 'services/auth'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginPageProps extends RouteComponentProps {
  authState: AuthState
}

const LoginPage: React.FC<LoginPageProps> = ({
  authState,
  history,
  location,
}) => (
  <MainTemplate authState={authState} history={history} location={location}>
    <div css={ContainerStyle}>
      <p css={{ fontSize: '2rem', marginTop: '10px' }}>ログイン方法を選択</p>
      <div
        css={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          margin: '10px',
        }}
      >
        <Button text="Google" danger onClick={() => googleLogin()} />
      </div>
    </div>
  </MainTemplate>
)

export default LoginPage

const ContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})
