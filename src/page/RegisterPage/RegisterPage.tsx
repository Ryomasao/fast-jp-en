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

const RegisterPage: React.FC<RegistPageProps> = ({
  createSentence,
  authState,
}) => {
  const [values, setValues] = useState({ en: '', jp: '', note: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createSentence({ uid: authState.uid, ...values })
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <MainTemplate>
      <div>Register</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>英語</label>
          <TextArea onChange={handleChange} value={values.en} name="en" />
        </div>
        <div>
          <label>日本語</label>
          <TextArea onChange={handleChange} value={values.jp} name="jp" />
        </div>
        <div>
          <label>note</label>
          <TextArea onChange={handleChange} value={values.note} name="note" />
        </div>
        <Button text="登録する" type="submit" />
      </form>
    </MainTemplate>
  )
}

export default RegisterPage
