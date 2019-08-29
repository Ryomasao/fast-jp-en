import { connect } from 'react-redux'
import { AppState } from '../../store'
import WordContainer from './WordContainer'

const mapStateToProps = (state: AppState) => {
  return state
}

export default connect(mapStateToProps)(WordContainer)
