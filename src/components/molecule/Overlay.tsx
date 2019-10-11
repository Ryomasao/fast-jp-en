import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'

interface OverlayProps {
  isShow: boolean
  className?: string
}

const Overlay: React.FC<OverlayProps> = ({ isShow, className, children }) => {
  if (!isShow) return null

  return (
    <div
      css={{
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        // headerがfixedなので、header分の高さを考慮
        top: '-60px',
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
      className={className}
    >
      {children}
    </div>
  )
}

export default Overlay
