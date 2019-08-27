import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MainTemplate from '../../template/Main'
import WordCard from './WordCard'

const wordList = [
  {
    id: 1,
    jp: {
      text: 'これは猫ですか？',
    },
    en: {
      text: 'is this a cat?',
    },
  },
  {
    id: 2,
    jp: {
      text: 'これは犬ですか？',
    },
    en: {
      text: 'is this a dog?',
    },
  },
]

const WordContainer: React.FC = () => (
  <MainTemplate>
    <Slider
      // スライド両脇のボタンは非表示
      arrows={false}
      // 無限スライドはしない
      infinite={false}
    >
      <div css={WordListStyle}>
        {wordList.map(word => (
          <WordCard key={word.id} text={word.jp.text} />
        ))}
      </div>
      <div css={WordListStyle}>
        {wordList.map(word => (
          <WordCard key={word.id} text={word.en.text} />
        ))}
      </div>
    </Slider>
  </MainTemplate>
)

const WordListStyle = css({})

export default WordContainer
