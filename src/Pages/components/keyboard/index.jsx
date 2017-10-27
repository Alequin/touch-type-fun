import React from 'react'

import Key from './../key'
import css from "./Keyboard.scss"

class Keyboard extends React.Component {

  constructor(props){
    super(props)
    this.setEventListener()
    this.state = {
      a: false
    }
  }

  setEventListener(){
    document.addEventListener('keydown', (event) => {
      const letterState = {}
      letterState[event.key] = true
      this.setState(letterState)
    });

    document.addEventListener('keyup', (event) => {
      const letterState = {}
      letterState[event.key] = false
      this.setState(letterState)
    });
  }

  render() {
    return (
      <div className="keyboard-container">
        <Key highlight={this.state["a"]} letter="a"/>
      </div>
    )
  }
}

export default Keyboard;
