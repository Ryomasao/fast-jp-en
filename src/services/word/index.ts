import { WordContainer } from 'services/word/model'
import { db } from '../../firebase'
import api from '../api'

interface FetchWordResult {
  wordList: WordContainer[]
}

export const fetchWordList = async () => {
  const response = await api.get('/sentences')
  const sentences: FetchWordResult = response.data

  return sentences
}

interface FormData {
  uid: string
  en: string
  jp: string
  note?: string
}

export const createSentence = async (formData: FormData) => {
  try {
    const docRef = await db.collection('sentences').add(formData)

    return docRef
  } catch (e) {
    // TODO エラーハンドリング
    console.error(e)
    throw e
  }
}
