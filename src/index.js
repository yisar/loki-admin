import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'mobx-react'
import userState from './store/user-state'
import articleState from './store/article-state'

import App from './app'


import './common/style/reset.css'
import './common/style/index.css'


ReactDom.render((
  <Provider userState={userState} articleState={articleState}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))