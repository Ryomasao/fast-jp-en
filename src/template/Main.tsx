import React from 'react'
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import { Color } from '../const'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

interface MainProps {
  className?: string
}

const Main: React.FC<MainProps> = ({ className, children }) => {
  return (
    <div className={className}>
      <Global styles={globalStyle} />
      <Header css={headerStyle} />
      <main css={mainStyle}>{children}</main>
      <Footer css={footerStyle} />
    </div>
  )
}

// TODO GlobalスタイルはApp.tsxに移行する
// body全体にはスクロールはさせないようにする
const globalStyle = css`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    overflow: 'hidden';
    font-size: 1.4rem;
  }

  p {
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
  height: `calc(100vh - ${headerHeight}px)`,
  backgroundColor: Color.BACKGROUND_MAIN,
  overflow: 'scroll',
})

const footerStyle = css({
  position: 'fixed',
  bottom: 0,
  height: '95px',
  width: '100%',
})

export default Main
