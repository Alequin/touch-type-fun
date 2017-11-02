import React from 'react'
import css from "./GamePreview.scss"

class GamePreview extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="game-preview-container">
        <h4>Title</h4>
        <p>
          Descripton: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="score-frame">
          <p>Best Time: 00:00</p>
          <p>Average Time: 00:00</p>
        </div>
        <button>Play</button>
      </div>
    )
  }

}
export default GamePreview;
