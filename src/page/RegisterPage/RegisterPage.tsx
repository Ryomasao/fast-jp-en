import React, { useState } from 'react'
import MainTemplate from 'components/template/Main'
import TextArea from 'components/atoms/TextArea'
import Button from 'components/atoms/Button'
import { CreateSentenceParams } from 'store/sentences/actions'
import { AuthState } from 'services/auth/model'

interface RegistPageProps {
  createSentence: (params: CreateSentenceParams) => void
  authState: AuthState
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
}) => {
  const [values, setValues] = useState(initialState)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createSentence({ ...values, uid: authState.uid })
  }

  const handleChangeEn = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target
    setValues({ ...values, en: { ...values.en, sentence: value } })
  }

  const handleChangeJp = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target
    setValues({ ...values, jp: { ...values.en, sentence: value } })
  }

  return (
    <MainTemplate>
      <div>Register</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>英語</label>
          <TextArea
            onChange={handleChangeEn}
            value={values.en.sentence}
            name="en"
          />
        </div>
        <div>
          <label>日本語</label>
          <TextArea
            onChange={handleChangeJp}
            value={values.jp.sentence}
            name="jp"
          />
        </div>
        <div>
          <label>note</label>
          <TextArea
            onChange={handleChangeEn}
            value={values.en.note}
            name="note"
          />
        </div>
        <Button text="登録する" type="submit" />
      </form>
    </MainTemplate>
  )
}

export default RegisterPage
