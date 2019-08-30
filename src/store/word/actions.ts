import { fetchWordList } from '../../services/word'
import {
  WordContainer,
  SET_WORD_LIST,
  UPDATE_STATUS,
  WordActionType,
} from './types'

export const setWordList = (wordList: WordContainer[]): WordActionType => {
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
  const { wordList } = await fetchWordList()
  dispatch(setWordList(wordList))
}
