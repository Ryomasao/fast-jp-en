import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { AppState } from '../../store'
import { updateStatus as updateStatusType } from '../../store/word/actions'
import MainTemplate from '../../template/Main'
import WordCardList from './WordCardList'

// Reduxから注入されるprops + αはこんな感じに書くといいみたい
// type HogeProps = OwnProps & HogeState & HogeActions;
interface WordActions {
  updateStatus: typeof updateStatusType
}

type WordContainerProps = AppState & WordActions

const WordContainer: React.FC<WordContainerProps> = ({
  wordState,
  updateStatus,
}) => {
  return (
    <MainTemplate>
      <Slider
        // スライド両脇のボタンは非表示
        arrows={false}
        // 無限スライドはしない
        infinite={false}
      >
        <WordCardList
          lang="jp"
          wordState={wordState}
          updateStatus={updateStatus}
        />
        <WordCardList
          lang="en"
          wordState={wordState}
          updateStatus={updateStatus}
        />
      </Slider>
    </MainTemplate>
  )
}

export default WordContainer
