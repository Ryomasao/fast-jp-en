/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Word } from 'MyModels'
import { ReactComponent as CorrectLogo } from '../../asetts/icon/checked.svg'
import { ReactComponent as IncorrectLogo } from '../../asetts/icon/cross.svg'
import Card from '../../molecule/Card'

interface WordCardProps extends Word {
  status: number
  changeStatus: (id: number) => void
}

const WordCard: React.FC<WordCardProps> = ({ text, status, changeStatus }) => (
  <Card css={WordCardStyle}>
    <div css={FlexStyle} onClick={() => changeStatus(1)}>
      <div>
        <p css={MainText}>{text}</p>
        <p css={StatiSticksStyle}>出題回数: 1000 正答率: 99.98%</p>
      </div>
      {getLogo(status)}
    </div>
  </Card>
)

const getLogo = (status: number): JSX.Element | null => {
  if (status === 1) return <CorrectLogo />
  if (status === 2) return <IncorrectLogo />

  return null
}

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
