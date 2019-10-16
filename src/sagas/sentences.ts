import { call, fork, put, takeEvery } from 'redux-saga/effects'

import * as ActionType from 'store/sentences/const'
import { fetchWordList, createSentence } from 'services/word'
import {
  getSentences as get,
  createSentence as create,
} from 'store/sentences/actions'

function* runGetSentences(action: ReturnType<typeof get.start>) {
  try {
    const uid = action.payload
    const api = fetchWordList
    const sentences = yield call(api, uid)
    yield put(get.succeed({}, sentences))
  } catch (e) {
    yield put(get.fail({}, e))
  }
}

function* runCreateSentence(action: ReturnType<typeof create.start>) {
  try {
    const formData = action.payload
    yield call(createSentence, formData)
    yield put(create.succeed())
  } catch (e) {
    yield put(create.fail())
  }
}

// https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
// Basic Conceptの書き方にしとく
// https://medium.com/@daravind/how-to-crud-using-react-redux-redux-sagas-cdef5d49e972
// yield all[]の書き方のほうがシンプルかも？
function* watchGetWords() {
  yield takeEvery(ActionType.GET_WORD_LIST_START, runGetSentences)
  yield takeEvery(ActionType.CREATE_SENTENCE_START, runCreateSentence)
}

export default function* rootSaga() {
  yield fork(watchGetWords)
}
