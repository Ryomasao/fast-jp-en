import {WordList, SET_WORD_LIST, WordActionType} from './types'

export function setWordList(wordList: WordList):WordActionType {
  return {
    type: SET_WORD_LIST,
    payload: wordList
  }
}
