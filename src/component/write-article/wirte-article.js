import React from 'react'
import Markdown from '../../base/mk-editor/markdown'
import './write-article.css'

class WriteArticle extends React.Component {
  render() {
    return (
      <div className="write-article">
        <h1>撰写文章</h1>
        <input type="text" placeholder="请输入标题"/>
        <Markdown></Markdown>
        <span>选择分类：<select name="选择分类" id="">
          <option value="动画">动画</option>
          <option value="漫画">漫画</option>
          <option value="图包">图包</option>
          <option value="音乐">音乐</option>
          <option value="游戏">游戏</option>
          <option value="其他">其他</option>
        </select></span>
        <span>选择状态：<select name="" id="">
          <option value="审核">待审核</option>
          <option value="草稿">草稿</option>
          <option value="发布">发布</option>
        </select></span>
        <div>
          <button>发布文章</button>
        </div>
      </div>
    )
  }
}


export default WriteArticle