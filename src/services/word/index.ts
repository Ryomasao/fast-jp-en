import { WordContainer } from 'services/word/model'
import { db } from '../../firebase'
// import api from '../api'

interface FetchWordResult {
  wordList: WordContainer[]
}

export const fetchWordList = async (uid: string) => {
  try {
    const querySnapshot = await db
      .collection('sentences')
      .where('uid', '==', uid)
      .get()

    // querySnapshot.forEach(doc => {
    //  console.log(doc.data())
    // })

    const records = querySnapshot.docs.map(doc => doc.data())

    return { sentences: records }
  } catch (e) {
    // TODO エラーハンドリング
    console.error(e)
    throw e
  }
}

interface FormData {
  uid: string
  en: { sentence: string; note?: string }
  jp: { sentence: string; note?: string }
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
