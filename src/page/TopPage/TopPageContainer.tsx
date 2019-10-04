import React from 'react'
import MainTemplate from 'components/template/Main'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Button from 'components/atoms/Button'

const TopPageContainer: React.FC = () => (
  <MainTemplate>
    <div css={ContainerStyle}>
      <Button type="button" text="学ぶ" primary/>
      <Button type="button" text="追加する" />
    </div>
  </MainTemplate>
)

export default TopPageContainer

const ContainerStyle = css({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})
