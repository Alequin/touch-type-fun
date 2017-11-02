import React from 'react'
import GraphQlQuery from "./../../util/graphql/GraphQlQuery.js"

import css from "./GamePicker.scss"

class GamePicker extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      games: []
    }
  }

  componentDidMount(){
    const type = this.props.gameType
    const fields = ["id", "title", "description", "difficulty"]
    const query = GraphQlQuery.getAllGamesByType(type, fields)
    query.execute()
      .then((response) => {
        console.log(response);
      })
  }

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
