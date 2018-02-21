import React from 'react'
import './listview.css'
import {Link} from 'react-router-dom'
import {inject,observer} from 'mobx-react'
import Confirm from '../confirm/confirm'
import {withRouter} from 'react-router-dom'

@withRouter
@inject('articleState') @observer

class ListView extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isShow:false,
      id:''
    }
  }
  handleDelete(id){
    this.props.articleState.deleteOneArticle(id)
    this.setState({
      isShow:false,
      id:'',
    })
    window.location.reload()
  }

  handleShow(id){
    this.setState({
      isShow:true,
      id:id
    })
  }
  render() {
    return (

      <div className="listview">
        {this.state.isShow===true?<Confirm id={this.state.id} confirm={this.handleDelete.bind(this)}/>:null}

        <li style={{border: '0',padding:'10px 20px',fontWeight:'bold'}}>
          <div className="title" style={{color: '#444'}}>标题</div>
          <div className="sort">分类</div>
          <div className="status">状态</div>
          <div className="action">操作</div>
        </li>
        <ul style={{background: '#fff',padding:'0 10px'}}>

          {this.props.list.map((item) => {
            return (
              <li key={item._id}>
                <div className="title"><Link to={`/editor-article/`+item._id}>{item.title}</Link></div>
                <div className="sort">{item.sort}</div>
                <div className="status">{item.status}</div>
                <div className="action"><i className="icon-font icon-del" onClick={()=>{this.handleShow(item._id)}}></i><i className="icon-font icon-editor"></i></div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ListView