import React from 'react'
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import { Color } from './const'

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
  backgroundColor: Color.BACKGROUND_HEADER,
})

const mainStyle = css({
  marginTop: `${headerHeight}px`,
})

const footerStyle = css({
  position: 'fixed',
  bottom: 0,
  height: '95px',
  width: '100%',
  backgroundColor: Color.BACKGROUND_FOOTER,
})

const App: React.FC = () => {
  return (
    <div>
      <Global styles={globalStyle} />
      <header css={headerStyle}>header</header>
      <main css={mainStyle}>hello</main>
      <footer css={footerStyle}>footer</footer>
    </div>
  )
}

export default App
