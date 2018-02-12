import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {observer, inject} from 'mobx-react'

@inject('userState') @observer

@withRouter
class AuthRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      qq: ''
    }
  }

  componentDidMount() {

    const publicPath = ['/login', '/register']
    const pathName = this.props.location.pathname

    if (publicPath.indexOf(pathName) > -1) {
      return
    }
    // 是否登录
    axios.get('/api/user/info').then(res => {
      if (res.status === 200) {
        if (res.data.code === 0) {
          this.setState({
            name: res.data.result.name,
            qq: res.data.result.qq
          })

          this.props.userState.getInfo(this.state)

        } else {
          this.props.history.push('/login')
        }
      }
    })

  }

  render() {
    return null
  }
}

export default AuthRoute