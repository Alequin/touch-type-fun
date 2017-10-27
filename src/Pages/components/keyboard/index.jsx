
import React from 'react'

import Key from './../key'

class Keyboard extends React.Component {

  constructor(props){
    super(props)
    this.setEventListener()
    this.state = {
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
      console.log(event.key);
      const key = event.key.toLowerCase()
      const newState = Object.assign({}, this.state)
      if(key === "shift") this.onShiftUp(newState)
      newState.pressed[key] = false
      this.setState(newState)
    });
  }

  onShiftDown(state){
    state.pressed["shift"] = true
    this.setState(state)
  }

  onShiftUp(state){
    state.pressed["shift"] = false
    this.setState(state)
  }

  getLetter(char){
    if(this.state.pressed["shift"]){
      return char.toUpperCase();
    }
    return char
  }

  render() {
    return (
      <div className="keyboard-container">
        <Key highlight={this.state.pressed["a"]} letter={this.getLetter("a")}/>
      </div>
    )
  }
}

export default Keyboard;
