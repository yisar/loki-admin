import React from 'react'
import '../login/login.css'
import {observer, inject} from 'mobx-react'
import TopTip from '../../base/top-tip/top-tip'
import {Redirect} from 'react-router-dom'

@inject('userState') @observer

// import Link from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      pwd: '',
      qq: '',
      repeatPwd: ''
    }

    this.handleRegister = this.handleRegister.bind(this)

  }

  handleRegister() {
    console.log(this.props.userState)
    this.props.userState.userRegister(this.state)
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    })

  }

  render() {
    return (
      <div>
        {this.props.userState.redirectTo ? <Redirect to={this.props.userState.redirectTo}/> : null}
        {this.props.userState.msg ? <TopTip text={this.props.userState.msg}></TopTip> : null}

        <div className="login">
          <h1>注册</h1>
          <ul>
            <li><input type="text" placeholder="QQ号" onChange={e => this.handleChange('qq', e.target.value)}/></li>
            <li><input type="text" placeholder="用户名" onChange={e => this.handleChange('name', e.target.value)}/></li>
            <li><input type="password" placeholder="密码" onChange={e => this.handleChange('pwd', e.target.value)}/>
            </li>
            <li><input type="password" placeholder="确认密码"
                       onChange={e => this.handleChange('repeatPwd', e.target.value)}/>
            </li>
            <li>
              <button onClick={this.handleRegister}>注册</button>
            </li>
            <li><a href="">返回首页</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Home