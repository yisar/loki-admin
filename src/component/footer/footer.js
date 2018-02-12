import React from 'react'
import {withRouter} from 'react-router-dom'
import './footer.css'

@withRouter
class Footer extends React.Component {
  render(){
    const publicPath = ['/login', '/register']
    const pathName = this.props.location.pathname

    if (publicPath.indexOf(pathName) > -1) {
      return null
    }
    return(
      <footer>
        <p>·  Powered by Loki-admin  ·</p>
      </footer>
    )
  }

}


export default Footer