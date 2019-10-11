import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { AuthState } from 'services/auth/model'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import MainTemplate from 'components/template/Main'
import Button from 'components/atoms/Button'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TopPageContainerProps extends RouteComponentProps {
  authState: AuthState
}

const TopPage: React.FC<TopPageContainerProps> = ({ authState, history }) => {
  const transitionPage = (url: string) => {
    history.push(url)
  }

  return (
    <MainTemplate authState={authState} history={history}>
      <div css={ContainerStyle}>
        <Button
          type="button"
          text="学ぶ"
          danger
          onClick={() => transitionPage('/sentences')}
          css={bitLargeButton}
        />
        <Button
          type="button"
          text="追加する"
          primary
          onClick={() => transitionPage('/admin/sentences')}
        />
      </div>
    </MainTemplate>
  )
}

export default TopPage

const ContainerStyle = css({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const bitLargeButton = css({
  fontSize: '2.2rem',
})
