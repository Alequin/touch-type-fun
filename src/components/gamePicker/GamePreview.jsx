import React from 'react'
import css from "./GamePreview.scss"

class GamePreview extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="game-preview-container" style={{"width": this.props.width}}>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
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
