import React from "react"
import MenuOption from "./MenuOption.jsx"
import css from "./MenuBar.scss"

import gameTypes from "./../../util/gameTypes.js"
import StringHelper from "./../../util/StringHelper"

class MenuBar extends React.Component {

  renderMenuOptions(){
    const options = []
    for(let key of Object.keys(gameTypes)){
      const text = StringHelper.capitalise(gameTypes[key])
      options.push(<MenuOption key={key} text={text} />)
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
