import React, { useState } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MainTemplate from '../../template/Main'
import WordCard from './WordCard'

const WordContainer: React.FC = (props: any) => {
  const [wordList, editWord] = useState([
    {
      id: 1,
      jp: {
        text: 'これは猫ですか？',
      },
      en: {
        text: 'is this a cat?',
      },
      status: 0,
      correctCount: 0,
      incorrectCount: 0,
      viewCount: 0,
    },
  ])

  const handleUpdate = (id: number): void => {
    const newWordList = wordList.map(word => {
      if (word.id === id) {
        /* eslint-disable no-param-reassign */
        word.status = 1
      }

      return word
    })

    editWord(newWordList)
  }

  return (
    <MainTemplate>
      <Slider
        // スライド両脇のボタンは非表示
        arrows={false}
        // 無限スライドはしない
        infinite={false}
      >
        <div css={WordListStyle}>
          {wordList.map(word => (
            <WordCard
              key={word.id}
              id={word.id}
              text={word.jp.text}
              status={word.status}
              changeStatus={handleUpdate}
            />
          ))}
        </div>
        <div css={WordListStyle}>
          {wordList.map(word => (
            <WordCard
              key={word.id}
              id={word.id}
              text={word.en.text}
              status={word.status}
              changeStatus={handleUpdate}
            />
          ))}
        </div>
      </Slider>
    </MainTemplate>
  )
}

const WordListStyle = css({})

// const useWordList = () => {}

export default WordContainer
