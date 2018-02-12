import React from 'react'
import {withRouter} from 'react-router-dom'
import './header.css'

@withRouter
class Header extends React.Component {
  render(){
    const publicPath = ['/login', '/register']
    const pathName = this.props.location.pathname

    if (publicPath.indexOf(pathName) > -1) {
      return null
    }
    return(
      <header>
        <ul>
          <li className="active">控制台</li>
          <li>撰写</li>
          <li>管理</li>
          <li>设置</li>
        </ul>
      </header>
    )
  }

}


export default Header