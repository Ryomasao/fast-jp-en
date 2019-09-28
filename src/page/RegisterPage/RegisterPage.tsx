import React from 'react'
import MainTemplate from 'components/template/Main'
import TextArea from 'components/atoms/TextArea'
import Button from 'components/atoms/Button'

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log('submit')
}

const RegisterPage: React.FC = () => (
  <MainTemplate>
    <div>Register</div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>英語</label>
        <TextArea />
      </div>
      <div>
        <label>日本語</label>
        <TextArea />
      </div>
      <div>
        <label>メモ</label>
        <TextArea />
      </div>
      <Button text="登録する" type="submit" />
    </form>
  </MainTemplate>
)

export default RegisterPage
