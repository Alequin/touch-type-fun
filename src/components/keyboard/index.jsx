
import React from 'react'

import CharKey from './../key/charKey'
import SpaceKey from './../key/spaceKey'
import ShiftKey from './../key/shiftKey'
import BackSpaceKey from './../key/backSpaceKey'
import KeyboardHelper from "./KeyboardHelper"

class Keyboard extends React.Component {

  constructor(props){
    super(props)
    this.setEventListeners()
    this.keyMap = KeyboardHelper.getGeneralKeyMap()
    this.state = {
      shift: {pressed: false, count: 0},
      pressed: {}
    }
  }

  setEventListeners(){
    document.addEventListener('keydown', (event) => {
      const newState = this.buildNewState(event, true)
      console.log(event.key);
      this.setState(newState)
    });

    document.addEventListener('keyup', (event) => {
      const newState = this.buildNewState(event, false)
      this.setState(newState)
    });
  }

  buildNewState(event, isDown){
    const keyPressed = event.key
    const newState = Object.assign({}, this.state)
    const stateKey = this.getStateKeyFromEvent(keyPressed)
    if(stateKey === "shift"){
      this.setShiftState(newState, isDown)
    }else{
      newState.pressed[stateKey] = isDown
    }
    return newState
  }

  setShiftState(newState, isDown){
    let numPressed = null
    if(isDown) numPressed = ++newState.shift.count
    else numPressed = --newState.shift.count
    newState.shift.pressed = numPressed > 0
  }

  getStateKeyFromEvent(key){
    key = key.toLowerCase()
    const charCode = key.charCodeAt(0)
    if((charCode < 97 || charCode > 123) && this.state.shift.pressed){
      return this.keyMap[key]
    }
    return key
  }

  getLetter(char){
    if(this.state.shift.pressed){
      return char.toUpperCase();
    }
    return char
  }

  getSpecialChar(char){
    if(this.state.shift.pressed){
      return this.keyMap[char]
    }
    return char
  }

  buildLetterKey(char){
    return (
      <CharKey
        highlight={this.state.pressed[char]}
        letter={this.getLetter(char)}
        keyId={`key-${char}`}/>
    )
  }

  buildSpecialKey(char){
    return (
      <CharKey
        highlight={this.state.pressed[char]}
        letter={this.getSpecialChar(char)}
        keyId={`key-${char}`}/>
    )
  }

  render() {
    return (
      <div className="keyboard-container">
        {this.buildLetterKey("g")}
        {this.buildLetterKey("h")}
        {this.buildLetterKey("b")}
        <SpaceKey highlight={this.state.pressed[" "]} letter={"Space"} keyId={`key-space`}/>
      </div>
    )
  }
}

export default Keyboard;

// shift and back key working code
{/* <ShiftKey highlight={this.state.shift.pressed} letter={"Shift"} keyId="key-shift"/>
<BackSpaceKey highlight={this.state.pressed["backspace"]} letter={"Back"} keyId="key-back-space"/> */}
