import {observable, action} from 'mobx'
import axios from 'axios'


class ArticleState {
  @observable article = {
    title: '',
    content: '',
    sort: '',
    status: ''
  }
  @observable msg = ''

  @action writeArticle(article) {
    this.article = article
    if (!this.article.title || !this.article.content || !this.article.sort || !this.article.status) {
      return this.msg = '都是必填的！'
    }
    axios.post('/article/write', article).then(
      (res) => {
        if (res.status === 200 & res.data.code === 0) {
          this.msg = res.data.msg
        }
      }
    )
  }
}

const articleState = new ArticleState()
console.log('articleState is ready')


export default articleState