import { call, fork, put, takeEvery } from 'redux-saga/effects'
import { GET_WORD_LIST_START } from 'store/sentences/const'
import { fetchWordList } from 'services/word'
import { getWords } from 'store/sentences/actions'

function* runGetWords(action: any) {
  try {
    const api = fetchWordList
    const sentences = yield call(api)
    yield put(getWords.succeed({}, sentences))
  } catch (e) {
    yield put(getWords.fail({}, e))
  }
}

function* watchGetWords() {
  yield takeEvery(GET_WORD_LIST_START, runGetWords)
}

export default function* rootSaga() {
  yield fork(watchGetWords)
}
