// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { graphql, gql } from 'react-apollo'
import { find } from 'lodash'
import User from '../User'
import { Table } from 'antd'

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: 'author',
    dataIndex: 'userId',
    key: 'author'
  }
]

class Posts extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      posts: PropTypes.array
    })
  }

  state = {
    selectedRowKeys: []
  }

  renderFooter = (curPage) => {
    if (this.state.selectedRowKeys.length > 0) {
      const selectedKey = this.state.selectedRowKeys[0]
      const selected = find(this.props.data.posts, { id: selectedKey })
      return <User userId={selected.userId} />
    } else {
      return null
    }
  }

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys })
  }

  render () {
    const { data: { loading, posts } } = this.props
    const rowSelection = {
      type: 'radio',
      onChange: this.onSelectChange
    }
    return (
      <Table loading={loading}
        rowKey={'id'}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={posts}
        footer={this.renderFooter}
       />
    )
  }
}

const PostsQuery = gql`
query PostsQuery {
  posts {
    id
    title
    userId
  }
}
`

export default graphql(PostsQuery)(Posts)
