import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

interface Props {
  url: string | null
}

const CircleImage: React.FC<Props> = ({ url }) => {
  return (
    <div css={ImageWrapperStyle}>
      <img css={ImageStyle} src={url || ''} alt="you" />
    </div>
  )
}

const ImageWrapperStyle = css({
  width: '32px',
  height: '32px',
  margin: '8px',
  border: '1px solid rgba(32,33,36,0.12)',
  overflow: 'hidden',
  borderRadius: '50%',
})

const ImageStyle = css({
  width: '32px',
  height: '32px',
})

export default CircleImage
