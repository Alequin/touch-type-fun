
import React from 'react'

import Key from './../key'
import KeyboardHelper from './KeyboardHelper'

class Keyboard extends React.Component {

  constructor(props){
    super(props)
    this.setEventListener()
    this.state = {
      letters: KeyboardHelper.getLowerCaseLetters(),
      pressed: {
        shift: false,
        a: false
      }
    }
  }

  setEventListener(){
    document.addEventListener('keydown', (event) => {
      const key = event.key.toLowerCase()
      let newState = Object.assign({}, this.state)
      if(key === "shift") this.onShiftDown(newState)
      newState.pressed[key] = true
      this.setState(newState)
    });

    document.addEventListener('keyup', (event) => {
      const key = event.key.toLowerCase()
      const newState = Object.assign({}, this.state)
      if(key === "shift") this.onShiftUp(newState)
      newState.pressed[key] = false
      this.setState(newState)
    });
  }

  onShiftDown(state){
    state.letters = KeyboardHelper.getUpperCaseLetters()
    state.pressed["shift"] = true
    this.setState(state)
  }

  onShiftUp(state){
    state.letters = KeyboardHelper.getLowerCaseLetters()
    state.pressed["shift"] = false
    this.setState(state)
  }

  render() {

    return (
      <div className="keyboard-container">
        <Key highlight={this.state.pressed["a"]} letter={this.state.letters["a"]}/>
      </div>
    )
  }
}

export default Keyboard;
