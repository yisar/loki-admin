import React from 'react'
import Markdown from '../../base/mk-editor/markdown'
import './write-article.css'
import {observer, inject} from 'mobx-react'
import TopTip from '../../base/top-tip/top-tip'

@inject('articleState') @observer

class WriteArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      sort: 'anime',
      status: 'wait'
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
    this.props.articleState.writeArticle(this.state)
    console.log(this.props.articleState)
  }

  render() {
    return (
      <div>{this.props.articleState.msg ? <TopTip text={this.props.articleState.msg} bgColor="#ea9292"></TopTip> : null}
        <div className="write-article">

          <h1>撰写文章</h1>
          <input type="text" placeholder="请输入标题" onChange={e => this.handleChange('title', e.target.value)}/>
          <Markdown handleMde={this.changeMde.bind(this)}></Markdown>
          <span><select onChange={e => this.handleChange('sort', e.target.value)} value="分类">
          <option value="anime">动画</option>
          <option value="comic">漫画</option>
          <option value="imgpack">图包</option>
          <option value="music">音乐</option>
          <option value="game">游戏</option>
          <option value="other">其他</option>
        </select></span>
          <span><select onChange={e => this.handleChange('status', e.target.value)} value="状态">
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