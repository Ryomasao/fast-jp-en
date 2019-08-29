import { WordList, WordActionType, SET_WORD_LIST, UPDATE_STATUS } from './types'

const initialState: WordList = {
  wordsList: [
    {
      id: 1,
      jp: {
        text: 'これは猫ですか？',
      },
      en: {
        text: 'is this a cat?',
      },
      status: 0,
    },
  ],
}

export default (state = initialState, action: WordActionType) => {
  switch (action.type) {
    case SET_WORD_LIST:
      /* eslint-disable no-param-reassign */
      state = action.payload

      return state
    case UPDATE_STATUS:
      /* eslint-disable no-param-reassign */
      state.wordsList = state.wordsList.map(word => word)

      return state
    default:
      return state
  }
}
