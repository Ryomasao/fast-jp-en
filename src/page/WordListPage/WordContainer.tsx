import React, { useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MainTemplate from 'components/template/Main'
import { AppState } from 'store'
import WordCardList from './WordCardList'

// Reduxから注入されるprops + αはこんな感じに書くといいみたい
// type HogeProps = OwnProps & HogeState & HogeActions;
interface WordActions {
  getSentencesStart: () => void
  updateStatus: (id: number) => void
}

type WordContainerProps = AppState & WordActions

const WordContainer: React.FC<WordContainerProps> = ({
  wordState,
  getSentencesStart,
  updateStatus,
}) => {
  useEffect(() => {
    getSentencesStart()
    // マウント時のみに実行したいので空の配列を指定する
    // 依存しているpropsを指定しないと、react-hooks/exhaustive-depsでwarningが出る
    // getSentenceStartは何にも依存していないので、ひとまずdisableにしとく
    // eslint-disable-next-line
  }, [])

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
