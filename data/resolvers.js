const { find, filter } = require('lodash')

const posts = [
  {
    id: 1,
    title: 'how i got my first 1 million 👌',
    userId: 1
  },
  {
    id: 2,
    title: 'how tom got hist first 1 million 👍',
    userId: 2
  },
  {
    id: 3,
    title: 'how sam got his last 1 million 😎',
    userId: 3
  }
]

const users = [
  {
    id: 1,
    username: 'Tom',
    email: 'tom@tom.com',
    age: 26
  },
  {
    id: 2,
    username: 'Sam',
    email: 'sam@tom.com',
    age: 22
  },
  {
    id: 3,
    username: 'Josh',
    email: 'tom@tom.com',
    age: 24
  }
]

module.exports = {
  Query: {
    posts () {
      return posts
    },
    user (_, args) {
      return find(users, { id: args.id })
    }
  },
  User: {
    posts (user) {
      return filter(posts, { userId: user.id })
    }
  },
  Post: {
    author (post) {
      return find(users, { id: post.userId })
    }
  }
}
