// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import client from './client'
import App from './components/App'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </ApolloProvider>,
  document.getElementById('app')
)
