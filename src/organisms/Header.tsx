import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Color } from '../const'

interface HeaderProps {
  className?: string
}

const headerStyle = css({
  backgroundColor: Color.BACKGROUND_HEADER,
})

const Header: React.FC<HeaderProps> = ({ className }) => {
  // 親コンポーネントからもらう値でスタイルを書きたい
  // functionの中に書いてもパフォーマンス的に問題ないのかな？
  return (
    <header css={headerStyle} className={className}>
      header
    </header>
  )
}

export default Header
