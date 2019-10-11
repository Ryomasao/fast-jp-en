import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { signIn, signOut } from 'store/auth/actions'
import { User } from 'services/auth/model'
import { AppState } from 'store'
import LoginPage from './LoginPage'

const mapStateToProps = (state: AppState) => {
  return state
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signIn: (user: User) => dispatch(signIn(user)),
    signOut: () => dispatch(signOut()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage)
