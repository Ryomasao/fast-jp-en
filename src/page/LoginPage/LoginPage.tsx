import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import MainTemplate from 'components/template/Main'
import Button from 'components/atoms/Button'
import { googleLogin } from 'services/auth'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginPageProps extends RouteComponentProps {}

const LoginPage: React.FC<LoginPageProps> = ({ history }) => (
  <MainTemplate history={history}>
    <div css={ContainerStyle}>
      <Button text="Google" danger onClick={() => googleLogin()} />
    </div>
  </MainTemplate>
)

export default LoginPage

const ContainerStyle = css({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})
