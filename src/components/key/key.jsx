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
    const innerStyle = {"border": "", "backgroundColor": ""}
    if(this.props.highlight){
      this.setHighlightedStyles(outerStyle, innerStyle)
    }else{
      this.setUnhighlightedStyles(outerStyle, innerStyle)
    }
    return {outerStyle, innerStyle}
  }

  setHighlightedStyles(outer, inner){
    const border = "1px solid green"
    outer.border = border
    inner.border = border
    outer.backgroundColor = "green"
    inner.backgroundColor = "rgba(255,255,255,0.5)"
  }

  setUnhighlightedStyles(outer, inner){
    const border = "1px solid black"
    outer.border = border
    inner.border = border
    const bgColour = "#d3d3d3"
    outer.backgroundColor = bgColour
    inner.backgroundColor = bgColour
  }

  render() {
    const { outerStyle, innerStyle} = this.getBorderStyles()
    return (
      <div className={`${this.keyType}-key-container ${this.props.keyId}`} style={outerStyle}>
        <div className={`${this.keyType}-inner-border`} style={innerStyle}>
          {this.props.letter}
        </div>
      </div>
    )
  }
}

export default Key;
