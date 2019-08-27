import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Card from '../../molecule/Card'

const WordCard: React.FC = () => (
  <Card css={WordCardStyle}>
    <p>これは猫ですか？</p>
    <p css={StatiSticksStyle}>出題回数: 1000 正答率: 99.98%</p>
  </Card>
)

const WordCardStyle = css({
  marginTop: `10px`,
  fontFamily: 'Sawarabi Mincho',
  paddingLeft: `1.7rem`,
  paddingRight: `1.1rem`,
  paddingTop: `0.9rem`,
  paddingBottom: `0.7rem`,
})

const StatiSticksStyle = css({
  fontSize: '1rem',
  marginTop: '0.6rem',
})

export default WordCard
