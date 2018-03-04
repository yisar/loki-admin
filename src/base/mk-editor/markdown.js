import React from 'react'
import Mde from 'simplemde'
import './simpleMDE.css'
import {observer, inject} from 'mobx-react'
import {withRouter} from 'react-router-dom'

@withRouter
@inject('articleState') @observer


class Markdown extends React.Component {

  componentDidMount() {
    console.log(this.props)
    this.mde = new Mde({
      element: document.getElementById("marked"),
      autoDownloadFontAwesome: true,
      status: false,
      spellChecker: false,
      forceSync: true
    })

    this.mde.codemirror.on('change', () => {
      this.props.handleMde(this.mde.value())
    })

  }

  shouldComponentUpdate() {
      if (this.props.value||this.props.value===null) {
        return false
      }

    return true
  }

  componentDidUpdate() {
    this.mde.value(this.props.value)
    console.log(this.props.value)
    console.log(this.mde.value())
  }

  render() {

    return (
      <div className="simpleMDE">
        <textarea id="marked"></textarea>
      </div>
    )
  }
}

export default Markdown