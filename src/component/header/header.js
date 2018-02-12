import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import './header.css'

@withRouter
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0
    }
  }

  handleIndex(e) {
    this.setState({
      active: e
    })
    console.log(this.state.active)
  }

  render() {
    const publicPath = ['/login', '/register']
    const pathName = this.props.location.pathname

    if (publicPath.indexOf(pathName) > -1) {
      return null
    }
    return (
      <header>
        <ul>
          <Link to='/'><li>控制台</li></Link>
          <li className={this.state.active === 1 ? 'active' : null} onClick={(e)=>{this.handleIndex(e)}}>撰写</li>
          <li className={this.state.active === 2 ? 'active' : null} onClick={this.handleIndex}>管理</li>
          <li className={this.state.active === 3 ? 'active' : null} onClick={this.handleIndex}>设置</li>
        </ul>
      </header>
    )
  }

}


export default Header