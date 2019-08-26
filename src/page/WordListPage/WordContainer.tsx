import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import MainTemplate from '../../template/Main'
import WordCard from './WordCard'

const WordContainer: React.FC = () => (
  <MainTemplate>
    <div css={WordListStyle}>
      <WordCard />
    </div>
  </MainTemplate>
)

const WordListStyle = css({})

export default WordContainer
