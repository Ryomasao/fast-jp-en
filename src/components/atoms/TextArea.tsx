import React from 'react'

interface TextAreaProps {
  id?: string
}

const TextArea: React.FC<TextAreaProps> = ({ id }) => <textarea id={id} />

export default TextArea
