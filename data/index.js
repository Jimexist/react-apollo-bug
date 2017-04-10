// @flow
const { makeExecutableSchema } = require('graphql-tools')
const Schema = require('./schema')
const Resolvers = require('./resolvers')

const opts = {
  requireResolversForArgs: true,
  requireResolversForNonScalar: true
}

module.exports = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers
}, opts)
