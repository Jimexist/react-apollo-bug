const { makeExecutableSchema } = require('graphql-tools')
const Schema = require('./schema')
const Resolvers = require('./resolvers')

module.exports = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers
})
