import { connect } from 'react-redux'
import Top from '../components/Top'
import { Dispatch } from 'redux'

interface ReduxState {

}

interface ReduxAction {

}

const mapPropsToState = (state: ReduxState) => ({})

const mapPropsToDispatch = (dispatch: ReduxAction) => ({})

export default connect(
  mapPropsToState,
  mapPropsToDispatch
)(Top)
