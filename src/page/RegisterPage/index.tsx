import { Dispatch } from 'redux'
import { connect } from 'react-redux'
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPgae)
