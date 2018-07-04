import React from 'react'
import { Router } from 'react-router'
import { ApolloProvider } from 'react-apollo'
import createBrowserHistory from 'history/createBrowserHistory'
import PropTypes from 'prop-types'
import _client from './ApolloClient'

import 'video-react/dist/video-react.css'

const history = createBrowserHistory()

export default class Main extends React.Component {
  static propTypes = {
    routes: PropTypes.any.isRequired,
  }
  shouldComponentUpdate() {
    return false
  }
  render() {
    return (
      <ApolloProvider client={_client}>
        <div style={{ height: '100%' }}>
          <Router history={history} children={this.props.routes} />
        </div>
      </ApolloProvider>
    )
  }
}
