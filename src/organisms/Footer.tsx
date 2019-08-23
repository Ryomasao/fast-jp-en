import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Color } from '../const'

const footerStyle = css({
  position: 'fixed',
  bottom: 0,
  height: '95px',
  width: '100%',
  backgroundColor: Color.BACKGROUND_FOOTER,
})

const Footer: React.FC = () => (
    <footer css={footerStyle}>footer</footer>
)

export default Footer
