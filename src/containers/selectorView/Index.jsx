import React from "react"
import MenuBar from "./../../components/menuBar"
import GamePicker from "./../../components/gamePicker"
import css from "./SelectorView.scss"

import gameTypes from "./../../util/gameTypes.js"

class SelectorView extends React.Component {

  constructor(props){
    super(props)
    this.onClickMenuBar = this.onClickMenuBar.bind(this)
    this.state = {
      gameType: gameTypes.STANDARD
    }
  }

  getMenuOptions(){
    const options = Object.keys(gameTypes).map((key) => {
      return gameTypes[key]
    })
    return options
  }

  onClickMenuBar(option){
    this.setState({gamesType: option})
  }

  render() {
    return (
      <div className="selector-view-container">
      <div className="menu-bar-frame">
        <MenuBar options={this.getMenuOptions()} onClick={this.onClickMenuBar}/>
      </div>
      <div className="game-picker-frame">
        <GamePicker gameType={this.state.gameType}/>
      </div>
      </div>
    )
  }
}

export default SelectorView;
