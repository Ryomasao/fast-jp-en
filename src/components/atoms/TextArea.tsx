import React from 'react'

interface TextAreaProps {
  id?: string
  name?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: React.FC<TextAreaProps> = ({ id, name, onChange, value }) => (
  <textarea id={id} name={name} onChange={onChange} value={value} />
)

export default TextArea
