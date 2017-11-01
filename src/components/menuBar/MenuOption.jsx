import React from "react"
import css from "./MenuOption.scss"

class MenuOption extends React.Component {

  render() {
    return (
      <div className="menu-option-container">
        <h3>{this.props.text}</h3>
      </div>
    )
  }
}

export default MenuOption;
