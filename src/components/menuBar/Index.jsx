import React from "react"
import MenuOption from "./MenuOption.jsx"
import css from "./MenuBar.scss"

import StringHelper from "./../../util/StringHelper"

class MenuBar extends React.Component {

  renderMenuOptions(){
    const options = []
    let key = 0
    for(let option of this.props.options){
      const text = StringHelper.capitalise(option)
      options.push(<MenuOption key={key++} text={text} />)
    }
    return options
  }

  render() {
    return (
      <div className="menu-bar-container">
        {this.renderMenuOptions()}
      </div>
    )
  }
}

export default MenuBar;
