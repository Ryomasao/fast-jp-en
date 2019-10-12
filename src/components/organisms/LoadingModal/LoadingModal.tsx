import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ClipLoader from 'react-spinners/ClipLoader'
import Overlay from 'components/molecule/Overlay'

interface LoadingModalProps {
  isShow: boolean
  className?: string
}

const LoadingModal: React.FC<LoadingModalProps> = ({ isShow, className }) => {
  if (!isShow) return null

  return (
    <Overlay
      isShow={isShow}
      css={{
        // for loading spinner
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className={className}
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
    </Overlay>
  )
}

export default LoadingModal
