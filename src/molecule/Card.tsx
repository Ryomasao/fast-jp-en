import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Color } from '../const'

interface CardProps {
  className?: string
}

const Card: React.FC<CardProps> = ({ className, children }) => (
  <div css={CardStyle} className={className}>
    {children}
  </div>
)

const CardStyle = css({
  backgroundColor: `white`,
})

export default Card
