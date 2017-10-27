import React from 'react'

import css from './Key.scss'

class Key extends React.Component {

  getBorderStyles(){
    const outerStyle = {"border": "", "backgroundColor": ""}
    if(this.props.highlight){
      this.setHighlightedStyles(outerStyle)
    }else{
      this.setUnhighlightedStyles(outerStyle)
    }
    return outerStyle
  }

  setHighlightedStyles(outer, inner){
    outer.border = "1px solid green"
    outer.backgroundColor = "green"
  }

  setUnhighlightedStyles(outer, inner){
    outer.border = "1px solid black"
    outer.backgroundColor = "transparent"
  }

  render() {
    const style = this.getBorderStyles()
    return (
      <div className="key-container" style={style}>
        <div className="inner-border">
          {this.props.letter}
        </div>
      </div>
    )
  }
}

export default Key;
