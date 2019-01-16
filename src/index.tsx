import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/configureStore'
import Top from './containers/Top'

ReactDOM.render(
  <Provider store={store}>
    <Top />
  </Provider>,
  document.getElementById('root')
)
