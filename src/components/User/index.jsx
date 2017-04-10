// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { graphql, gql } from 'react-apollo'
import { Spin } from 'antd'

class Users extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      user: PropTypes.object
    })
  }

  render () {
    const { data: { loading, user } } = this.props
    if (loading) {
      return <Spin />
    }
    return (
      <div>
        <h2>
          User #{user.id}
        </h2>
        <i>
          Username: {user.username}
        </i>
      </div>
    )
  }
}

const UserQuery = gql`
query UserQuery ($id: Int!){
  user (id: $id) {
    id
    username
    email
  }
}
`

export default graphql(UserQuery, {
  options: props => ({
    variables: {
      id: props.userId
    },
    fetchPolicy: 'cache-and-network'
  })
})(Users)
