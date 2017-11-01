import React from "react"
import MenuOption from "./MenuOption.jsx"
import css from "./MenuBar.scss"

import StringHelper from "./../../util/StringHelper"

class MenuBar extends React.Component {

  constructor(props){
    super(props)
    this.state = this.buildInitalState(this.props.options)
  }

  buildInitalState(options){
    const state = {}
    for(let index in options){
      state[options[index]] = index == 0
    }
    return state
  }

  renderMenuOptions(){
    const options = []
    let key = 0
    for(let option of this.props.options){
      const text = StringHelper.capitalise(option)
      options.push(<MenuOption key={key++} text={text} highlighted={this.state[option]}/>)
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
