import axios from 'axios'

import {observable, action} from 'mobx'

class UserState {
  @observable user = {
    name: '',
    pwd: '',
    repeatPwd: '',
    qq: '',
    _id:''
  }
  @observable msg = ''
  @observable redirectTo = ''

  @action userRegister(user) {

    this.user = user

    if (!this.user.name || !this.user.pwd || !this.user.repeatPwd || !this.user.qq) {
      return this.msg = '都是必填的！'
    }
    if (this.user.pwd !== this.user.repeatPwd) {
      return this.msg = '两次密码不一致！'
    }

    axios.post('/user/register', user).then(
      (res) => {
        if (res.status === 200 & res.data.code === 0) {
          this.msg = res.data.msg
          setTimeout(() => {
            this.redirectTo = '/login'
          }, 3000)
        }

      }
    )
  }

  @action userLogin(user) {
    this.user = user
    if (!this.user.name || !this.user.pwd) {
      return this.msg = '都是必填的！'
    }
    axios.post('/user/login', user).then(
      (res) => {
        if (res.status === 200 & res.data.code === 0) {
          this.msg = res.data.msg
          this.user.qq = res.data.result.qq
          this.user._id=res.data.result._id
          this.redirectTo = '/info'
        }
      }
    )
  }

  @action getInfo(user) {
    this.user = user
  }

}

const userState = new UserState()

export default userState