// @flow
const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress } = require('graphql-server-express')
const schema = require('./data')

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())
app.use('/graphql', graphqlExpress({ schema }))

app.listen(PORT, '0.0.0.0', () => {
  console.info(`server started at port ${PORT}`)
})
