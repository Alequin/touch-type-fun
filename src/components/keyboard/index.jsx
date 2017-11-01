
import React from 'react'

import CharKey from './../key/CharKey'
import SpaceKey from './../key/SpaceKey'
import ShiftKey from './../key/ShiftKey'
import BackSpaceKey from './../key/BackSpaceKey'
import KeyboardHelper from "./KeyboardHelper"

import css from './Keyboard.scss'

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
    if( !(newState.shift.pressed && isDown) ){
      let numPressed = null
      newState.shift.pressed = isDown
    }
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

  buildLetterKeyElements(letters){
    const keys = letters.map((char) => {
      return this.buildLetterKey(char)
    })
    return keys
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

  buildSpecialKeyElements(specialChars){
    const keys = specialChars.map((char) => {
      return this.buildSpecialKey(char)
    })
    return keys
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
    const keyChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="]
    const keys = this.buildSpecialKeyElements(keyChars)
    keys.push(<BackSpaceKey key={"backpace"} highlight={this.state.pressed["backspace"]} letter={"Back"} keyId="key-back-space"/>)
    return this.renderRow(keys, "row-one")
  }

  renderRowTwo(){
    const keyChars = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
    const keys = this.buildLetterKeyElements(keyChars)
    const specialChars = ["[", "]"]
    const specialKeys = this.buildSpecialKeyElements(specialChars)
    return this.renderRow(keys.concat(specialKeys), "row-two")
  }

  renderRowThree(){
    const keyChars = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
    const keys = this.buildLetterKeyElements(keyChars)
    const specialChars = [";", "'", "\\"]
    const specialKeys = this.buildSpecialKeyElements(specialChars)
    return this.renderRow(keys.concat(specialKeys), "row-three")
  }

  renderRowFour(){
    const keyChars = ["z", "x", "c", "v", "b", "n", "m"]
    const leftShift = (<ShiftKey key={"shift-l"} highlight={this.state.shift.pressed} letter={"Shift"} keyId="key-shift"/>)
    let keys = [leftShift]
    for(let key of keyChars){
      keys.push(this.buildLetterKey(key))
    }
    const specialChars = [",", ".", "/"]
    const specialKeys = this.buildSpecialKeyElements(specialChars)
    const rightShift = (<ShiftKey key={"shift-r"} highlight={this.state.shift.pressed} letter={"Shift"} keyId="key-shift"/>)
    const row = keys.concat(specialKeys)
    row.push(rightShift)
    return this.renderRow(row, "row-four")
  }

  renderRowFive(){
    return this.renderRow(
      <SpaceKey highlight={this.state.pressed[" "]} letter={"Space"} key={`key-space`}/>
    )
  }

  renderRow(content, rowClass = "unstatedRow"){
    return (
      <div className={`row ${rowClass}`}>
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
