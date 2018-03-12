import React from 'react'
import './login.css'
import {observer, inject} from 'mobx-react'
import {Redirect,Link} from 'react-router-dom'
import TopTip from '../../base/top-tip/top-tip'


// import Link from 'react-router-dom'
@inject('userState') @observer
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      pwd: ''
    }
  }

  handleLogin() {
    console.log(this.props.userState)
    this.props.userState.userLogin(this.state)
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }

  render() {
    return (
      <div>        {this.props.userState.redirectTo ? <Redirect to={this.props.userState.redirectTo}/> : null}
        {this.props.userState.msg ? <TopTip text={this.props.userState.msg}></TopTip> : null}
        <div className="login">
          <h1>登录</h1>
          <ul>
            <li><input type="text" placeholder="用户名" onChange={e => this.handleChange('name', e.target.value)}/></li>
            <li><input type="password" placeholder="密码" onChange={e => this.handleChange('pwd', e.target.value)}/></li>
            <li>
              <button onClick={this.handleLogin.bind(this)}>登录</button>
            </li>
            <li><Link to="/register">注册</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Login