
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
      const newState = this.buildNewState(event)
      console.log(event.key);
      this.setState(newState)
    });

    document.addEventListener('keyup', (event) => {
      const newState = this.buildNewState(event)
      this.setState(newState)
    });
  }

  buildNewState(event){
    const isKeyDown = event.type === 'keydown'
    const keyPressed = event.key
    const newState = Object.assign({}, this.state)
    const stateKey = this.getStateKeyFromEvent(keyPressed)

    if(stateKey === "shift"){
      this.setShiftState(newState, isKeyDown)
    }else{
      newState.pressed[stateKey] = isKeyDown
    }
    return newState
  }

  getStateKeyFromEvent(key){
    key = key.toLowerCase()
    const charCode = key.charCodeAt(0)
    if((charCode < 97 || charCode > 123) && this.state.shift.pressed){
      return this.keyMap[key]
    }
    return key
  }

  setShiftState(newState, isDown){
    let numPressed = null
    if(isDown) numPressed = ++newState.shift.count
    else numPressed = --newState.shift.count
    newState.shift.pressed = numPressed > 0
  }

  buildLetterKey(char){
    return (
      <CharKey
        key={char}
        keyId={`key-${char}`}
        highlight={this.state.pressed[char]}
        letter={this.getLetter(char)}/>
    )
  }

  buildSpecialKey(char){
    return (
      <CharKey
        key={char}
        keyId={`key-${char}`}
        highlight={this.state.pressed[char]}
        letter={this.getSpecialChar(char)}/>
    )
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

  renderRowOne(){
    const keyChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const keys = keyChars.map((keyChar) => {
      return this.buildSpecialKey(keyChar)
    })
    return this.renderRow(keys)
  }

  renderRowTwo(){
    const keyChars = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
    const keys = keyChars.map((keyChar) => {
      return this.buildLetterKey(keyChar)
    })
    return this.renderRow(keys)
  }

  renderRowThree(){
    const keyChars = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
    const keys = keyChars.map((keyChar) => {
      return this.buildLetterKey(keyChar)
    })
    return this.renderRow(keys)
  }

  renderRowFour(){
    const keyChars = ["z", "x", "c", "v", "b", "n", "m"]
    const shift = (<ShiftKey key={"shift"} highlight={this.state.shift.pressed} letter={"Shift"} keyId="key-shift"/>)
    let keys = [shift]
    for(let key of keyChars){
      keys.push(this.buildLetterKey(key))
    }
    return this.renderRow(keys)
  }

  renderRowFive(){
    return this.renderRow(
      <SpaceKey highlight={this.state.pressed[" "]} letter={"Space"} key={`key-space`}/>
    )
  }

  renderRow(content){
    return (
      <div className="row">
        {content}
      </div>
    )
  }

  render() {
    return (
      <div className="keyboard-container">
        {this.renderRowOne()}
        {this.renderRowTwo()}
        {this.renderRowThree()}
        {this.renderRowFour()}
        {this.renderRowFive()}
      </div>
    )
  }
}

export default Keyboard;


//
//

// shift and back key working code
{/*
<BackSpaceKey highlight={this.state.pressed["backspace"]} letter={"Back"} keyId="key-back-space"/> */}
