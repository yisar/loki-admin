import React from 'react'
import Markdown from '../../base/mk-editor/markdown'
import './write-article.css'
import {observer, inject} from 'mobx-react'
import TopTip from '../../base/top-tip/top-tip'
import axios from "axios"

@inject('articleState') @observer

class WriteArticle extends React.Component {
  constructor(props) {

    super(props)

    this.state = {
      _id: '',
      title: '',
      content: '',
      sort: '',
      status: ''
    }
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }

  changeMde(content) {
    this.setState({
      content: content
    })
  }

  handleClick() {
    if (this.props.location.pathname === '/write-article') {
      this.props.articleState.writeArticle(this.state)
      console.log(this.props.articleState)
    } else {
      this.props.articleState.updateArticle(this.state)
      console.log(this.props.articleState)
    }
  }

  componentDidMount() {
    if (this.props.location.pathname !== '/write-article') {
      axios.get('/article/one', {
        params: {
          id: this.props.match.params.editor
        }
      }).then((res) => {
        if (res.status === 200 && res.data.code === 0) {
          this.setState(res.data.result)
        }
      })
    }

  }

  shouldComponentUpdate(nextProps, nextState) {

    if (this.state.title !== nextState.title || this.state.sort !== nextState.sort || this.state.status !== nextState.status) {
      return true
    }
    return false
  }

  render() {
    return (
      <div>{this.props.articleState.msg ? <TopTip text={this.props.articleState.msg} bgColor="#ea9292"></TopTip> : null}
        <div className="write-article">

          <h1>撰写文章</h1>
          <input type="text" placeholder="请输入标题"
                 value={this.state.title}
                 onChange={e => this.handleChange('title', e.target.value)}/>
          <Markdown handleMde={this.changeMde.bind(this)}
                    value={this.state.content}></Markdown>
          <span><select onChange={e => this.handleChange('sort', e.target.value)}
                        value={this.state.sort}>
          <option value="anime">动画</option>
          <option value="comic">漫画</option>
          <option value="imgpack">图包</option>
          <option value="music">音乐</option>
          <option value="game">游戏</option>
          <option value="novel">小说</option>
          <option value="news">资讯</option>
          <option value="other">其他</option>
        </select></span>
          <span><select onChange={e => this.handleChange('status', e.target.value)}
                        value={this.state.status}>
          <option value="wait">待审核</option>
          <option value="draft">草稿</option>
          <option value="public">发布</option>
        </select></span>
          <div>
            <button onClick={this.handleClick.bind(this)}>发布文章</button>
          </div>
        </div>
      </div>
    )
  }
}


export default WriteArticle