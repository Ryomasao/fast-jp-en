import { WordContainer } from 'services/word/model'
import 'firebase/firestore'
import api from '../api'

interface FetchWordResult {
  wordList: WordContainer[]
}

export const fetchWordList = async () => {
  const response = await api.get('/sentences')
  const sentences: FetchWordResult = response.data

  return sentences
}

export const createSentence = async () => {
  const response = await api.post('/sentences/new')

  return response
}
