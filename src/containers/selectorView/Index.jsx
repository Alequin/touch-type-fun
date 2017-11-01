import React from "react"
import MenuBar from "./../../components/menuBar"
import StandardGamePicker from "./../../components/gamePickers/StandardGamePicker"
import css from "./SelectorView.scss"

import gameTypes from "./../../util/gameTypes.js"

class SelectorView extends React.Component {

  constructor(props){
    super(props)
    this.onClickMenuBar = this.onClickMenuBar.bind(this)
    this.state = {
      selectorMenuOption: gameTypes.STANDARD
    }
  }

  getMenuOptions(){
    const options = Object.keys(gameTypes).map((key) => {
      return gameTypes[key]
    })
    return options
  }

  renderGamePicker(){
    console.log(this.state.selectorMenuOption);
    switch(this.state.selectorMenuOption){
      case gameTypes.STANDARD:
        return(<StandardGamePicker />)
      case gameTypes.ENDLESS:
        return(<div>endless</div>)
      case gameTypes.WHACK_A_MOLE:
        return(<div>whake a mole</div>)
    }
  }

  onClickMenuBar(option){
    this.setState({selectorMenuOption: option})
  }

  render() {
    return (
      <div className="selector-view-container">
        <MenuBar options={this.getMenuOptions()} onClick={this.onClickMenuBar}/>
        {this.renderGamePicker()}
      </div>
    )
  }
}

export default SelectorView;
