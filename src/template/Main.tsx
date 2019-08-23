import React from 'react'
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

// TODO GlobalスタイルはApp.tsxに移行する
const globalStyle = css`
  body {
    margin: 0;
  }
`

const headerHeight = 60

const headerStyle = css({
  position: 'fixed',
  top: 0,
  height: `${headerHeight}px`,
  width: '100%',
})

const mainStyle = css({
  marginTop: `${headerHeight}px`,
})

const footerStyle = css({
  position: 'fixed',
  bottom: 0,
  height: '95px',
  width: '100%',
})

const Main: React.FC = ({ children }) => {
  return (
    <div>
      <Global styles={globalStyle} />
      <Header css={headerStyle} />
      <main css={mainStyle}>{children}</main>
      <Footer css={footerStyle} />
    </div>
  )
}

export default Main
