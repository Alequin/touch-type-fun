import React from 'react'

import css from "./GamePicker.scss"

class GamePicker extends React.Component{

  render(){
    return (
      <div className="game-picker-container">
        <div className="arrow-container left-arrow"></div>
        <div className="games"></div>
        <div className="arrow-container right-arrow"></div>
      </div>
    )
  }

}
export default GamePicker;
