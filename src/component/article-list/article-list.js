import React from 'react'
import axios from 'axios'
import ListView from '../../base/list-view/list-view'
import {withRouter} from 'react-router-dom'

@withRouter
class ArticleList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      article:[]
    }
  }

  render(){
    return(
      <div className="article-list">
        <h1>我的文章</h1>
        <ListView list={this.state.article} />
      </div>
    )
  }
  componentDidMount(){
    if(this.props.location.pathname==='/articles'){
      return axios.get('/article/article').then((res)=>{
        if(res.status===200&&res.data.code===0){
          this.setState({
            article:res.data.result
          })
        }
      })
    }
    axios.get('/article/author',{
      params: {
        id: this.props.match.params.author
      }
    }).then(res=>{
      if(res.status===200&&res.data.code===0){
        this.setState({
          article:res.data.result
        })
      }
    })
  }
}

export default ArticleList