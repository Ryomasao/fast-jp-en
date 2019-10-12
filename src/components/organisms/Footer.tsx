import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Color } from 'const'

// https://emotion.sh/docs/typescript
// cssで渡したプロパティは、classNameとして受け取れる

// ?をつけることで省略可能なプロパティとして宣言できる
// これをつけないと、Main.tsxでは、classNameに値をセットしてないのでTSでエラーになる
interface FooterProps {
  className?: string
}

const footerStyle = css({
  backgroundColor: Color.BACKGROUND_FOOTER,
})

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer css={footerStyle} className={className}>
      footer
    </footer>
  )
}

export default Footer
