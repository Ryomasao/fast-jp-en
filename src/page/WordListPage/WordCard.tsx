import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { ReactComponent as CheckedLogo } from '../../asetts/icon/checked.svg'
import Card from '../../molecule/Card'

const WordCard: React.FC = () => (
  <Card css={WordCardStyle}>
    <div css={FlexStyle}>
      <div>
        <p css={MainText}>これは猫ですか？</p>
        <p css={StatiSticksStyle}>出題回数: 1000 正答率: 99.98%</p>
      </div>
      <CheckedLogo />
    </div>
  </Card>
)

const WordCardStyle = css({
  marginTop: '1rem',
  fontFamily: 'Sawarabi Mincho',
  padding: '0.9rem 1.1rem 0.7rem 1.7rem',
})

const FlexStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const MainText = css({
  height: '5.5rem',
})

const StatiSticksStyle = css({
  fontSize: '1rem',
  marginTop: '0.6rem',
})

export default WordCard
