import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import MainTemplate from 'components/template/Main'
import Button from 'components/atoms/Button'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TopPageContainerProps extends RouteComponentProps {}

const TopPageContainer: React.FC<TopPageContainerProps> = ({ history }) => {
  const transitionPage = (url: string) => {
    history.push(url)
  }

  return (
    <MainTemplate>
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

export default TopPageContainer

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
