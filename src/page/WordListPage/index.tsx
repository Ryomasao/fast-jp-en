import { connect } from 'react-redux'
import WordContainer from './WordContainer'

const mapStateToProps = (state: any) => {
  return state.word
}

export default connect(mapStateToProps)(WordContainer)
