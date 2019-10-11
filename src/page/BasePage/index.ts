import { Dispatch } from 'redux'
import { User } from 'services/auth/model'
import { connect } from 'react-redux'
import { signIn, signOut } from 'store/auth/actions'
import BasePage from './BasePage'


const mapDispatchToProps = (dispatch: Dispatch) => ({
  signIn: (user: User) => dispatch(signIn(user)),
  signOut: () => dispatch(signOut()),
})

export default connect(
  null,
  mapDispatchToProps,
)(BasePage)
