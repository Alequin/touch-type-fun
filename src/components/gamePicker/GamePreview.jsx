import React from 'react'
import css from "./GamePreview.scss"

class GamePreview extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="game-preview-container" style={{"width": this.props.width}}>
        <h4>{this.props.game.title}</h4>
        <p>{this.props.game.description}</p>
        <div className="score-frame">
          <p>Best Time: {this.props.game.topScore()} Seconds</p>
          <p>Average Time: {this.props.game.averageScore()} Seconds</p>
        </div>
        <button>Play</button>
      </div>
    )
  }

}
export default GamePreview;
