import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { signIn, signOut } from 'store/auth/actions'
import { User } from 'services/auth/model'
import RegisterPgae from 'page/RegisterPage/RegisterPage'
import { createSentence, CreateSentenceParams } from 'store/sentences/actions'
import { AppState } from 'store'

const mapStateToProps = (state: AppState) => {
  return state
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createSentence: (params: CreateSentenceParams) =>
      dispatch(createSentence.start(params)),
    signIn: (user: User) => dispatch(signIn(user)),
    signOut: () => dispatch(signOut()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPgae)
