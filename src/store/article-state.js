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

  @action updateArticle(article) {
    this.article = article
    axios.post('/article/update', article).then(
      (res) => {
        if (res.data.code === 0 & res.status === 200) {
          this.msg = res.data.msg
        }
      }
    )
  }

  @action deleteOneArticle(id) {
    axios.delete('/article/delete', {
        params: {
          id: id
        }
      }
    ).then((res) => {
      console.log(res.data)
    })
  }
}

const articleState = new ArticleState()


export default articleState