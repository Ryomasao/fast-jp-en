import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { createSentence, CreateSentenceParams } from 'store/sentences/actions'
import { AppState } from 'store'
import LoginPage from './LoginPage'

const mapStateToProps = (state: AppState) => {
  return state
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createSentence: (params: CreateSentenceParams) =>
      dispatch(createSentence.start(params)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage)
