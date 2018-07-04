import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

const MOUNT_NODE = document.getElementById('root')

const render = () => {
  const App = require('./common/main').default // eslint-disable-line global-require
  const routes = require('./routers').default // eslint-disable-line global-require
  ReactDOM.render(<App routes={routes()} />, MOUNT_NODE)
}
render()
registerServiceWorker()
