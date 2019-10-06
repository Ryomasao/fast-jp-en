import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { WordState, WordContainer } from 'services/word/model'
import WordCard from './WordCard'

// word[lang]でアクセスしているので、型をただのstringにするとtsエラーになる
// typesに書くべきと思うけどひとまずここに書いとく

type Lang = 'jp' | 'en'
interface OwnProps {
  lang: Lang
}

interface WordActions {
  updateStatus: (id: number) => void
}

type WordCardListProps = { wordState: WordState } & WordActions & OwnProps

const WordCardList: React.FC<WordCardListProps> = ({
  wordState,
  lang,
  updateStatus,
}) => {
  return (
    <div css={WordListStyle}>
      {wordState.sentences.map((word: WordContainer, index) => (
        <WordCard
          // NOTE 更新系じゃないのでindexでも問題ない
          key={index}
          id={word.id}
          text={word[lang].sentense}
          status={word.status}
          changeStatus={updateStatus}
        />
      ))}
    </div>
  )
}

const WordListStyle = css({})

export default WordCardList
