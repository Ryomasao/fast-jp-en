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

const mainStyle = css({
  marginTop: `${headerHeight}px`,
})

const Main: React.FC = ({ children }) => {
  return (
    <div>
      <Global styles={globalStyle} />
      <Header headerHeight={headerHeight} />
      <main css={mainStyle}>{children}</main>
      <Footer />
    </div>
  )
}

export default Main
