import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { AuthState } from 'services/auth/model'
import { WordState } from 'services/word/model'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MainTemplate from 'components/template/Main'
import WordCardList from './WordCardList'

// Reduxから注入されるprops + αはこんな感じに書くといいみたい
// type HogeProps = OwnProps & HogeState & HogeActions;

interface WordPageProps extends RouteComponentProps {
  getSentencesStart: () => void
  updateStatus: (id: number) => void
  authState: AuthState
  wordState: WordState
  signOut: () => {}
}

const WordContainer: React.FC<WordPageProps> = ({
  authState,
  wordState,
  getSentencesStart,
  updateStatus,
  history,
  location,
  signOut,
}) => {
  useEffect(() => {
    getSentencesStart()
    // マウント時のみに実行したいので空の配列を指定する
    // 依存しているpropsを指定しないと、react-hooks/exhaustive-depsでwarningが出る
    // getSentenceStartは何にも依存していないので、ひとまずdisableにしとく
    // eslint-disable-next-line
  }, [])

  return (
    <MainTemplate
      authState={authState}
      history={history}
      location={location}
      signOut={signOut}
    >
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
