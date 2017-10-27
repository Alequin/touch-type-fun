import React from 'react'

class Key extends React.Component {

  constructor(props){
    super(props)
    this.keyType = "abstract"
  }

  setKeyType(type){
    this.keyType = type
  }

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
      <div className={`${this.keyType}-key-container ${this.props.keyId}`} style={style}>
        <div className={`${this.keyType}-inner-border`}>
          {this.props.letter}
        </div>
      </div>
    )
  }
}

export default Key;
