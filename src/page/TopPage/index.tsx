import { connect } from 'react-redux'
import { AppState } from 'store'
import TopPage from 'page/TopPage/TopPage'

const mapStateToProps = (state: AppState) => {
  return state
}

export default connect(mapStateToProps)(TopPage)
