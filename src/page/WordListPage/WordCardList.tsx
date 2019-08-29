import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { AppState } from '../../store'
import WordCard from './WordCard'
import { WordContainer } from '../../store/word/types'

// word[lang]でアクセスしているので、型をただのstringにするとtsエラーになる
// typesに書くべきと思うけどひとまずここに書いとく
type Lang = 'jp' | 'en'

interface OwnProps {
  lang: Lang
}

type WordCardListProps = AppState & OwnProps

const WordCardList: React.FC<WordCardListProps> = ({ wordState, lang }) => {
  const handleUpdate = () => {}

  return (
    <div css={WordListStyle}>
      {wordState.wordsList.map((word: WordContainer) => (
        <WordCard
          key={word.id}
          id={word.id}
          text={word[lang].text}
          status={word.status}
          changeStatus={handleUpdate}
        />
      ))}
    </div>
  )
}

const WordListStyle = css({})

export default WordCardList
