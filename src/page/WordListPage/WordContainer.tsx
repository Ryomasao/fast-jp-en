import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { AppState } from '../../store'
import MainTemplate from '../../template/Main'
import WordCardList from './WordCardList'

// Reduxから注入されるprops + αはこんな感じに書くといいみたい
// type HogeProps = OwnProps & HogeState & HogeActions;

const WordContainer: React.FC<AppState> = ({ wordState }) => {
  return (
    <MainTemplate>
      <Slider
        // スライド両脇のボタンは非表示
        arrows={false}
        // 無限スライドはしない
        infinite={false}
      >
        <WordCardList lang="jp" wordState={wordState} />
        <WordCardList lang="en" wordState={wordState} />
      </Slider>
    </MainTemplate>
  )
}

export default WordContainer
