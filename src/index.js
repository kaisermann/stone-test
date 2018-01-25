import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'
import store from './store'

import './index.css'

import App from './containers/App/App'
import Mockup from './components/Mockup/Mockup'

ReactDOM.render(
  <Provider store={store}>
    <Mockup>
      <App />
    </Mockup>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
