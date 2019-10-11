// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { updateStatus, getSentences } from 'store/sentences/actions'
import { signIn, signOut } from 'store/auth/actions'
import { User } from 'services/auth/model'
import { AppState } from 'store'
import SentenceListPage from './SentenceListPage'

const mapStateToProps = (state: AppState) => {
  return state
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  // アクションに別名をつけたいので、dispatchを受け取って書く方式にする
  return {
    getSentencesStart: () => dispatch(getSentences.start()),
    updateStatus: (id: number) => dispatch(updateStatus(id)),
    signIn: (user: User) => dispatch(signIn(user)),
    signOut: () => dispatch(signOut()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
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
