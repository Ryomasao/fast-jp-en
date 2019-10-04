import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import color from '../../const/palette'


interface ButtonProps {
  text?: string
  onClick?: () => void
  type?: 'submit' | 'button'
  primary?: boolean
  danger?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button', primary, danger }) => {

  const backgroundColor = primary ? 'blue' : danger ? color.LIGHT_RED : 'black'

  const buttonStyle = css({
    //backgroundColor: Color.LIGHT_GRAYISH_BLUE,
    backgroundColor,
    display: 'block',
    fontSize: '2rem',
    padding: '1.4rem 2.4rem',
    width: '50%',
    margin: '1rem',
    border: '1px solid transparent',
    borderRadius: `0.4rem`,
    color: '#fff',
  })

  return (
  // typeをpropsに指定すると、react/button-has-typeのlint erorがでる
  // eslint-disable-next-line react/button-has-type
  <button css={buttonStyle} type={type} onClick={onClick}>
    {text || 'button'}
  </button>
  )
}

export default Button
