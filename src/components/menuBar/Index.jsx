import React from "react"
import MenuOption from "./MenuOption.jsx"
import css from "./MenuBar.scss"

class MenuBar extends React.Component {

  constructor(props){
    super(props)
    this.onClickMenuOption = this.onClickMenuOption.bind(this)
    this.state = this.buildInitalState(this.props.options)
  }

  buildInitalState(options){
    const state = {}
    for(let index in options){
      state[options[index]] = index == 0
    }
    return state
  }

  onClickMenuOption(option){
    const newState = Object.assign({}, this.state)
    for(let key of Object.keys(newState)){
      newState[key] = key === option
    }
    this.setState(newState)
    this.props.onClick(option)
  }

  renderMenuOptions(){
    const options = []
    let key = 0
    for(let option of this.props.options){
      const text = option
      options.push(
        <MenuOption
          key={key++}
          text={text}
          highlighted={this.state[option]}
          onClick={this.onClickMenuOption}/>
      )
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
