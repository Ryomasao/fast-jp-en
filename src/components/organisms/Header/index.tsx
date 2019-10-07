import { connect } from 'react-redux'
import Header from 'components/organisms/Header/Header'
import { AppState } from 'store'

const mapStateToProps = (state:AppState) => state

export default connect(mapStateToProps)(Header)
