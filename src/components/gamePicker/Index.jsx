import React from 'react'

import css from "./GamePicker.scss"

class GamePicker extends React.Component{

  render(){
    return (
      <div className="game-picker-container">
        <div className="arrow-container left-arrow">
          <img src="static/games/images/arrow_small_left.png" alt="arrow left"/>
        </div>
        <div className="games"></div>
        <div className="arrow-container right-arrow">
          <img src="static/games/images/arrow_small_right.png" alt="arrow right"/>
        </div>
      </div>
    )
  }

}
export default GamePicker;
