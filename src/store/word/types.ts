// ACTION TYPE
export const SET_WORD_LIST = 'SET_WORD_LIST'

// ACTION CREATETOR
interface SetWordList {
  type: typeof SET_WORD_LIST
  payload: WordList
}

// action createtorが増えたら SetWordList || で足してくっぽい
export type WordActionType = SetWordList

// STATE TYPE
export interface WordList {
  wordsList: WordContainer[]
}

export interface WordContainer {
  id: number
  jp: Word
  en: Word
  status: number
}

export interface Word {
  text: string
}
