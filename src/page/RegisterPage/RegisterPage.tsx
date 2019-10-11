import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import MainTemplate from 'components/template/Main'
import TextArea from 'components/atoms/TextArea'
import Button from 'components/atoms/Button'
import { CreateSentenceParams } from 'store/sentences/actions'
import { AuthState } from 'services/auth/model'

interface RegistPageProps extends RouteComponentProps {
  createSentence: (params: CreateSentenceParams) => void
  authState: AuthState
  signOut: () => {}
}

const initialState = {
  jp: {
    sentence: '',
    note: '',
  },
  en: {
    sentence: '',
    note: '',
  },
  uid: '',
}

const RegisterPage: React.FC<RegistPageProps> = ({
  createSentence,
  authState,
  history,
  location,
  signOut,
}) => {
  const [values, setValues] = useState(initialState)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createSentence({ ...values, uid: authState.uid })
  }

  // 1項目に1handlerは結構しんどい(単純でわかりやすいという考え方もある)

  // name属性を使って汎用化するのは基本的なパターン
  // const { name, value } = e.target.name
  // newState = {...oldState, [name]: value }

  // とはいえ今回のようにデータ構造がオブジェクトでネストされていると
  // 上記のパターンを使うのに工夫が必要になる。
  // ex) name属性をピリオドで階層を表すとか。 en.sentence
  // これをやるならformik使おうって感じかな。
  const handleChangeEn = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setValues({ ...values, en: { ...values.en, sentence: value } })
  }

  const handleChangeEnNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setValues({ ...values, en: { ...values.en, note: value } })
  }

  const handleChangeJp = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setValues({ ...values, jp: { ...values.jp, sentence: value } })
  }

  const handleChangeJpNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setValues({ ...values, jp: { ...values.jp, note: value } })
  }

  return (
    <MainTemplate
      authState={authState}
      history={history}
      location={location}
      signOut={signOut}
    >
      <div>Register</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>英語</label>
          <TextArea onChange={handleChangeEn} value={values.en.sentence} />
        </div>
        <div>
          <label>note</label>
          <TextArea onChange={handleChangeEnNote} value={values.en.note} />
        </div>
        <div>
          <label>日本語</label>
          <TextArea onChange={handleChangeJp} value={values.jp.sentence} />
        </div>
        <div>
          <label>メモ</label>
          <TextArea onChange={handleChangeJpNote} value={values.jp.note} />
        </div>
        <Button text="登録する" type="submit" />
      </form>
    </MainTemplate>
  )
}

export default RegisterPage
