import { WordContainer } from 'services/word/model'
import {
  UPDATE_STATUS,
  GET_WORD_LIST_START,
  GET_WORD_LIST_SUCCESS,
  GET_WORD_LIST_FAIL,
} from 'store/sentences/const'

// sync
export const updateStatus = (id: number) => {
  return {
    type: UPDATE_STATUS,
    payload: id,
  }
}

// async
export const getWords = {
  start: (params: any) => {
    return {
      type: GET_WORD_LIST_START,
      payload: params,
    }
  },
  succeed: (params: any, result: { wordsList: WordContainer[] }) => {
    return {
      type: GET_WORD_LIST_SUCCESS,
      payload: { params, result },
    }
  },
  fail: (params: any, error: any) => {
    return {
      type: GET_WORD_LIST_FAIL,
      payload: { params, error },
      error: true,
    }
  },
}
export type SentencesAction =
  | ReturnType<typeof updateStatus>
  | ReturnType<typeof getWords.start>
  | ReturnType<typeof getWords.succeed>
  | ReturnType<typeof getWords.fail>
