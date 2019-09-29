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
  type?: 'submit' | 'button'
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button' }) => (
  // typeをpropsに指定すると、react/button-has-typeのlint erorがでる
  // eslint-disable-next-line react/button-has-type
  <button css={buttonStyle} type={type} onClick={onClick}>
    {text || 'button'}
  </button>
)

export default Button
