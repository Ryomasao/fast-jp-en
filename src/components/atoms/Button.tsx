import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import palette from '../../const/palette'

interface ButtonProps {
  text?: string
  onClick?: () => void
  type?: 'submit' | 'button'
  primary?: boolean
  danger?: boolean
  // 使用するコンポーネントで上書きしたい場合
  // css={objectStyle}で設定すると、そのcssに紐づくclassNameが渡される
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = 'button',
  primary,
  danger,
  className,
}) => {
  // eslint-disable-next-line no-nested-ternary
  const backgroundColor = primary
    ? palette.LIGHT_BLUE
    : danger
    ? palette.LIGHT_RED
    : 'black'

  const buttonStyle = css({
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
    <button
      css={buttonStyle}
      type={type}
      onClick={onClick}
      className={className}
    >
      {text || 'button'}
    </button>
  )
}

export default Button
