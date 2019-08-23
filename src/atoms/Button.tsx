import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Color } from '../const'

const buttonStyle = css({
  backgroundColor: Color.LIGHT_GRAYISH_BLUE
})

const Button: React.FC = () => (
  <button css={buttonStyle}>button</button>
)

export default Button
