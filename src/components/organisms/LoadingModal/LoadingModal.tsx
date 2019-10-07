import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ClipLoader from 'react-spinners/ClipLoader'

interface LoadingModalProps {
  isShow: boolean
}

const LoadingModal: React.FC<LoadingModalProps> = ({ isShow }) => {
  if (!isShow) return null

  return (
    <div
      css={css({
        position: 'absolute',
        // headerがfixedなので、header分の高さを考慮
        top: '-60px',
        left: 0,
        opacity: 0.9,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',

        // for loading spinner
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <div>
        {/* loadingは常にtrue */}
        <ClipLoader sizeUnit="px" size={150} color="#ffffff" loading />
        <p
          css={css({
            textAlign: 'center',
            color: '#ffffff',
          })}
        >
          Loading...
        </p>
      </div>
    </div>
  )
}

export default LoadingModal
