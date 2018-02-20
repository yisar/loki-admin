import React from 'react'
import './listview.css'

class ListView extends React.Component {

  render() {
    console.log(this.props.list)
    return (
      <div className="listview">
        <li style={{border: '0',padding:'10px 20px',fontWeight:'bold'}}>
          <div className="title" style={{color: '#444'}}>标题</div>
          <div className="sort">分类</div>
          <div className="status">状态</div>
        </li>
        <ul style={{background: '#fff',padding:'0 10px'}}>

          {this.props.list.map((item) => {
            return (
              <li key={item._id}>
                <div className="title">{item.title}</div>
                <div className="sort">{item.sort}</div>
                <div className="status">{item.status}</div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ListView