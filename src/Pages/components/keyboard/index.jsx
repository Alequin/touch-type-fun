import React from 'react'

import Key from './../key'
import css from "./Keyboard.scss"

class Keyboard extends React.Component {


  render() {
    return (
      <div className="keyboard-container">
        <Key letter="a"/>
      </div>
    )
  }
}

export default Keyboard;
