import React from 'react'
import Mde from 'simplemde'
import './simpleMDE.css'
import './markdown.css'

class Markdown extends React.Component {

  componentDidMount() {
    const mde = new Mde({
      element: document.getElementById("marked"),
      status: false,
      spellChecker: false
    })

    // 监听变化

    mde.codemirror.on('change', () => {
      this.props.handleMde(mde.value())
    })
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