import { fetchWordList } from '../../services/word'
import { WordList, SET_WORD_LIST, UPDATE_STATUS, WordActionType } from './types'

export const setWordList = (wordList: WordList): WordActionType => {
  return {
    type: SET_WORD_LIST,
    payload: wordList,
  }
}

export const updateStatus = (id: number): WordActionType => {
  return {
    type: UPDATE_STATUS,
    payload: id,
  }
}

export const getWordList = () => async (dispatch: any) => {
  const res = await fetchWordList()
}
