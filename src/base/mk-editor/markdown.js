import React from 'react'
import Mde from 'simplemde'
import './simpleMDE.css'
import './markdown.css'

class Markdown extends React.Component {
  componentDidMount() {
    new Mde({
      element: document.getElementById("marked"),
      status: false,
      spellChecker: false,
      showIcons:[ ]
    })
  }

  render() {
    return (
      <div className="simpleMDE">
        <textarea name="mark" id="marked" cols="30" rows="10"></textarea>
      </div>
    )
  }
}

export default Markdown