import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Card from '../../molecule/Card'

const WordCard: React.FC = () => (
  <Card css={WordCardStyle}>
    <p>これは猫ですか？</p>
    <p>出題回数: 1000 正答率: 99.98%</p>
  </Card>
)

const WordCardStyle = css({
  marginTop: `10px`,
  fontFamily: 'Sawarabi Mincho',
})

export default WordCard
