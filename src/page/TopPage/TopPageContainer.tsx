import React from 'react'
import MainTemplate from 'components/template/Main'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const TopPageContainer: React.FC = () => (
  <MainTemplate>
    <div css={ContainerStyle}>
      <button css={ButtonStyle} type="button">
        学ぶ
      </button>
      <button css={ButtonStyle} type="button">
        例文を追加する
      </button>
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

type ImageProps = {
  color: string
}

const ButtonStyle = css({
  display: 'block',
  fontSize: '2rem',
  padding: '1.4rem 2.4rem',
  width: '50%',
  margin: '1rem',
  border: '1px solid transparent',
  borderRadius: `0.4rem`,
  backgroundColor: '#FF4641',
  color: '#fff',
})
