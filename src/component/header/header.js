import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import './header.css'
import Cookies from 'js-cookie'

@withRouter
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0
    }
  }

  logOut() {
    Cookies.remove('id')
    window.location.href = window.location.href
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
          <Link to='/info'>
            <li>控制台</li>
          </Link>
          <Link to='/write-article'>
            <li>撰写</li>
          </Link>
          <li>管理
            <ul>
              <Link to='/articles'>
                <li>管理文章</li>
              </Link>
              <Link to='/users'>
                <li>管理用户</li>
              </Link>
            </ul>
          </li>
          <li>设置</li>
          <li onClick={this.logOut.bind(this)} className="logout">
            退出
          </li>
        </ul>

      </header>
    )
  }

}


export default Header