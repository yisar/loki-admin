import React from 'react'
import {Route} from 'react-router-dom'


import Register from "./component/register/register"
import UserInfo from "./component/user-info/user-info"
import Login from "./component/login/login"
import AuthRoute from './component/authroute/authroute'
import Header from "./component/header/header"
import Footer from './component/footer/footer'
import WriteArticle from "./component/write-article/wirte-article"
import ArticleList from './component/article-list/article-list'
import Loading from './base/loading/loading'

class App extends React.Component {

  render() {
    return (
      <div>
        <Loading/>
        <AuthRoute/>
        <Header/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/info' component={UserInfo}/>
        <Route path='/write-article' component={WriteArticle}/>
        <Route path='/editor-article/:editor' component={WriteArticle}/>
        <Route path='/article/:author' component={ArticleList}/>
        <Route path='/articles' component={ArticleList}/>
        <Footer/>
      </div>
    )
  }
}

export default App