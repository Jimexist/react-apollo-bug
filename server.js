// @flow
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const webpackConfig = require('./webpack.conf')
const { graphqlExpress } = require('graphql-server-express')
const schema = require('./data')

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())
app.use('/graphql', graphqlExpress({ schema }))

app.use(webpackDevMiddleware(webpack(webpackConfig), {
  noInfo: false,
  quiet: false,
  publicPath: '/static/',
  stats: {
    colors: true
  }
}))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.info(`dev server started at port ${PORT}`)
})
