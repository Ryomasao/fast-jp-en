import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import MainTemplate from 'components/template/Main'
import Button from 'components/atoms/Button'
import { googleLogin } from 'services/auth'

const LoginPage: React.FC = () => (
  <MainTemplate>
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
