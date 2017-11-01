import React from "react"
import css from "./MenuOption.scss"

class MenuOption extends React.Component {

  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  getTextClass(){
    return this.props.highlighted ? "selected" : "deselected"
  }

  onClick(){
    this.props.onClick(this.props.text)
  }

  render() {
    return (
      <div className="menu-option-container">
        <h3 className={this.getTextClass()} onClick={this.onClick}>{this.props.text}</h3>
      </div>
    )
  }
}

export default MenuOption;
