// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateStatus, getSentences } from 'store/sentences/actions'
import { AppState } from 'store'
import SentenceListPage from './SentenceListPage'

const mapStateToProps = (state: AppState) => {
  return state
}

export default connect(
  mapStateToProps,
  // アクションに別名をつけたいので、dispatchを受け取って書く方式にする
  dispatch => ({
    getSentencesStart: () => dispatch(getSentences.start()),
    updateStatus: (id: number) => dispatch(updateStatus(id)),
  }),
  // reduxのヘルパ関数binadActionCratorsを使うと、dispatchを個別に書かなくていい
  // dispatch =>
  //  bindActionCreators(
  //    {
  //      getSentencesStart: () => getWords.start(1),
  //      updateStatus: (id: number) => updateStatus(id),
  //    },
  //    dispatch,
  //  ),
  // actionsとかにまとめたいときは
  // {actions: bindActionCreator()} or {actions: {hoge: () => dipatch(hoge())}}
)(SentenceListPage)
