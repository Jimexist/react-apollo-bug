import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import Posts from '../Posts'

class App extends React.Component {
  state = {
    current: 'posts'
  }

  handleClick = (e) => {
    this.setState({
      current: e.key
    })
  }

  render () {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>Click on <em>Posts</em> and then select a post!</p>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode={'horizontal'}>
          <Menu.Item key={'posts'}>
            <Link to={'/posts'}>
              <Icon type='mail' /> Posts
            </Link>
          </Menu.Item>
        </Menu>
        <div>
          <Route path='/posts' component={Posts} />
        </div>
      </div>
    )
  }
}

export default App
