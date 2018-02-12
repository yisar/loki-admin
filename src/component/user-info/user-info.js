import React from 'react'
import {observer, inject} from 'mobx-react'
import './user-info.css'

@inject('userState') @observer

class UserInfo extends React.Component {

  render() {
    const qq = `http://q2.qlogo.cn/headimg_dl?dst_uin=` + this.props.userState.user.qq + `&spec=100`
    return (
      <div className="user-info">
        <div className="avatar">
          <img src={qq} alt="作者头像"/>
        </div>
        <div className="name">欢迎！{this.props.userState.user.name}sama~</div>
        <div className="quick-start">
          快速开始：
          <span>写文章</span>
          <span>查看文章</span>
          <span>设置</span>
        </div>
      </div>
    )
  }
}


export default UserInfo