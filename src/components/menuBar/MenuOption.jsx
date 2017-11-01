import React from "react"
import css from "./MenuOption.scss"

class MenuOption extends React.Component {

  getTextClass(){
    return this.props.highlighted ? "selected" : "deselected"
  }

  render() {
    return (
      <div className="menu-option-container">
        <h3 className={this.getTextClass()}>{this.props.text}</h3>
      </div>
    )
  }
}

export default MenuOption;
