import React from "react"
import MenuBar from "./../../components/menuBar"
import css from "./SelectorView.scss"

import gameTypes from "./../../util/gameTypes.js"

class SelectorView extends React.Component {

  getMenuOptions(){
    const options = Object.keys(gameTypes).map((key) => {
      return gameTypes[key]
    })
    return options
  }

  render() {
    return (
      <div className="selector-view-container">
        <MenuBar options={this.getMenuOptions()}/>
      </div>
    )
  }
}

export default SelectorView;
