import {Dispatch} from 'redux'
import {connect} from 'react-redux'
import Header from 'components/organisms/Header/Header'
import {AppState} from 'store'
import {signIn, signOut} from 'store/auth/actions'
import { User } from 'services/auth/model'

const mapStateToProps = (state:AppState) => state
const mapDispatchToProps = (dispatch:Dispatch) => ({
  signIn: (user:User) => dispatch(signIn(user)),
  signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
