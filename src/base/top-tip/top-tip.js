import React from 'react'
import './top-tip.css'


class TopTip extends React.Component {

  render() {
    let text = this.props.text
    let bg = this.props.bgColor
    return (
      <div className="toptip" style={{background:bg}}>
        {text}
      </div>
    )
  }
}

export default TopTip