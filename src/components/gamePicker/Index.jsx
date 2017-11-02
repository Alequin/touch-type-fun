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
    const gameFields = ["title", "description", "difficulty"]
    const recordFields = ["timeInSeconds"]
    const query = GraphQlQuery.getAllGamesByTypeWithRecords(type, gameFields, recordFields)
    query.execute()
      .then((response) => {
        const games = response.allGames.edges.map((game) => {
          return game.node
        })
        this.setState({games: games})
      })
  }

  render(){
    return (
      <div className="game-picker-container">

        <div className="arrow-container left-arrow">
          <img src="static/games/images/arrow_small_left.png" alt="arrow left"/>
        </div>

        <div className="games">

        </div>

        <div className="arrow-container right-arrow">
          <img src="static/games/images/arrow_small_right.png" alt="arrow right"/>
        </div>

      </div>
    )
  }

}
export default GamePicker;
