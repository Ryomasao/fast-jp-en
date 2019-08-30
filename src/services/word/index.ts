import api from '../api'

export const fetchWordList = async () => {
  const wordList = await api.get('/wordList')

  return wordList.data
}
