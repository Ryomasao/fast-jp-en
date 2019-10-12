import { SentencesAction } from 'store/sentences/actions'
import { WordState } from 'services/word/model'
import * as ActionType from 'store/sentences/const'

const initialState: WordState = {
  sentences: [],
}

export default (state = initialState, action: SentencesAction) => {
  switch (action.type) {
    case ActionType.GET_WORD_LIST_START: {
      return { ...state, sentences: [] }
    }
    case ActionType.GET_WORD_LIST_SUCCESS: {
      return { ...state, sentences: action.payload.result.sentences }
    }
    case ActionType.UPDATE_STATUS: {
      /* eslint-disable no-param-reassign */
      const newSentences = state.sentences.map((sentence, index) => {
        if (index === action.payload) {
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
