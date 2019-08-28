import { WordList, WordActionType, SET_WORD_LIST } from './types'

const initialState: WordList = {
  wordsList: [
    {
      id: 1,
      jp: {
        text: 'test',
      },
      en: {
        text: 'test',
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
    default:
      return state
  }
}
