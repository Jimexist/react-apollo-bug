// @flow
module.exports = `
type User {
  id: Int!
  username: String!
  email: String
  age: Int
  posts: [Post]
}

type Post {
  id: Int!
  title: String
  userId: Int!
  author: User
}

type Query {
  posts: [Post]
  user(id: Int!): User
}

schema {
  query: Query
}
`
