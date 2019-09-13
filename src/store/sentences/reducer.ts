import { SentencesAction } from 'store/sentences/actions'
import { WordState } from 'services/word/model'
import {
  GET_WORD_LIST_START,
  GET_WORD_LIST_SUCCESS,
  UPDATE_STATUS,
} from 'store/sentences/const'

const initialState: WordState = {
  sentences: [],
}

export default (state = initialState, action: SentencesAction) => {
  switch (action.type) {
    case GET_WORD_LIST_START: {
      return { ...state, sentences: [] }
    }
    case GET_WORD_LIST_SUCCESS: {
      return { ...state, sentences: action.payload.result.sentences }
    }
    case UPDATE_STATUS: {
      /* eslint-disable no-param-reassign */
      const newSentences = state.sentences.map(sentence => {
        if (sentence.id === action.payload) {
          sentence.status = toggleStatus(sentence.status)
        }

        return sentence
      })

      return { ...state, sentences: newSentences }
    }
    default:
      return state
  }
}

const toggleStatus = (currentStatus: number): number => {
  if (currentStatus === 0) return 1
  if (currentStatus === 1) return 2

  return 1
}
