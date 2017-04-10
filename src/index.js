// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import client from './client'
import logger from 'redux-logger'
import App from './components/App'

const store = createStore(
  combineReducers({
    apollo: client.reducer()
  }),
  compose(
      applyMiddleware(client.middleware(), logger),
      // If you are using the devToolsExtension, you can add it here also
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
)

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </ApolloProvider>,
  document.getElementById('app')
)
