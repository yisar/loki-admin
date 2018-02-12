import React from 'react'
import {Route} from 'react-router-dom'


import Register from "./component/register/register"
import UserInfo from "./component/user-info/user-info"
import Login from "./component/login/login"
import AuthRoute from './component/authroute/authroute'
import Header from "./component/header/header"
import Footer from './component/footer/footer'
import UserAdmin from "./component/user-admin/user-admin"
import WriteArticle from "./component/write-article/wirte-article"

class App extends React.Component {
  render() {
    return (
      <div>
        <AuthRoute/>
        <Header/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/' exact component={UserInfo}/>
        <Route path='/user' component={UserAdmin}></Route>
        <Route path='/write-article' component={WriteArticle}></Route>
        <Footer/>
      </div>
    )
  }
}

export default App