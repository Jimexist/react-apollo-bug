const { find, filter } = require('lodash')

const posts = []
const users = []

module.exports = {
  Query: {
    posts () {
      return posts
    }
  },
  User: {
    posts (user) {
      return filter(posts, { userId: user.id })
    }
  },
  Post: {
    user (post) {
      return find(users, { id: post.userId })
    }
  }
}
