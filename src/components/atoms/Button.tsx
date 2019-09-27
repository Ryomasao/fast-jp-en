import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Color } from '../../const'

const buttonStyle = css({
  backgroundColor: Color.LIGHT_GRAYISH_BLUE,
})

interface ButtonProps {
  text?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button css={buttonStyle} type="button" onClick={onClick}>
    {text || 'button'}
  </button>
)

export default Button
