import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Color } from '../const'

interface HeaderProps {
  headerHeight: number
}

const Header: React.FC<HeaderProps> = ({ headerHeight }) => {
  // 親コンポーネントからもらう値でスタイルを書きたい
  // functionの中に書いてもパフォーマンス的に問題ないのかな？
  const headerStyle = css({
    position: 'fixed',
    top: 0,
    height: `${headerHeight}px`,
    width: '100%',
    backgroundColor: Color.BACKGROUND_HEADER,
  })

  return <header css={headerStyle}>header</header>
}

export default Header
