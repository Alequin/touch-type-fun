
import React from 'react'

import Key from './../key'
import KeyboardHelper from "./KeyboardHelper"

class Keyboard extends React.Component {

  constructor(props){
    super(props)
    this.setEventListeners()
    this.keyMap = KeyboardHelper.getGeneralKeyMap()
    this.state = {
      pressed: {}
    }
  }

  setEventListeners(){
    document.addEventListener('keydown', (event) => {
      const keyPressed = event.key
      let newState = Object.assign({}, this.state)
      if(keyPressed === "Shift") newState.pressed["shift"] = true

      const stateKey = this.getStateKeyFromEvent(keyPressed)
      newState.pressed[stateKey] = true
      console.log(keyPressed);
      this.setState(newState)
    });

    document.addEventListener('keyup', (event) => {
      const keyPressed = event.key
      const newState = Object.assign({}, this.state)
      if(keyPressed === "Shift") newState.pressed["shift"] = false

      const stateKey = this.getStateKeyFromEvent(keyPressed)
      newState.pressed[stateKey] = false
      this.setState(newState)
    });
  }

  getStateKeyFromEvent(key){
    key = key.toLowerCase()
    const charCode = key.charCodeAt(0)
    if((charCode < 97 || charCode > 123) && this.state.pressed["shift"]){
      return this.keyMap[key]
    }
    return key
  }

  getLetter(char){
    if(this.state.pressed["shift"]){
      return char.toUpperCase();
    }
    return char
  }

  getNumber(char){
    if(this.state.pressed["shift"]){
      return this.keyMap[char]
    }
    return char
  }

  render() {
    return (
      <div className="keyboard-container">
        <Key highlight={this.state.pressed["1"]} letter={this.getNumber("1")} keyId={"num-1"}/>
        <Key highlight={this.state.pressed["a"]} letter={this.getLetter("a")} keyId={"a"}/>
      </div>
    )
  }
}

export default Keyboard;
