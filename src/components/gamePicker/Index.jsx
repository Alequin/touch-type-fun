import React from 'react'
import GraphQlQuery from "./../../util/graphql/GraphQlQuery.js"
import GamePreview from "./GamePreview.jsx"
import Game from "./../../util/game/Game.js"

import css from "./GamePicker.scss"

class GamePicker extends React.Component{

  constructor(props){
    super(props)
    this.maxGamesToShow = 3
    this.state = {
      games: [],
      gamesToShow: []
    }
  }

  componentDidMount(){
    const type = this.props.gameType
    const gameFields = ["title", "description", "difficulty"]
    const scoreFields = ["timeInSeconds"]
    const query = GraphQlQuery.getAllGamesByTypeWithScores(type, gameFields, scoreFields)
    query.execute()
      .then((response) => {
        const games = response.allGames.edges.map((game) => {
          return new Game(game.node)
        })
        console.log(games);
        this.setState({
          games: games,
          gamesToShow: this.buildGamesToShowArray(games)
        })
      })
  }

  buildGamesToShowArray(games){
    const gamesToShowArray = []
    const length = games.length
    for(let j=0; j<length; j++){
      if(j >= this.maxGamesToShow) break;
      gamesToShowArray.push(j)
    }
    return gamesToShowArray
  }

  renderSelectedGames(){
    const gamePreviews = this.state.gamesToShow.map((gameIndex) => {
      const game = this.state.games[gameIndex]
      return this.renderGamePreview(game)
    })
    return gamePreviews
  }

  renderGamePreview(game){
    const width = (100/this.maxGamesToShow).toString() + "%"
    return (
      <GamePreview key={game.title} width={width} game={game}/>
    )
  }

  render(){
    return (
      <div className="game-picker-container">

        <div className="arrow-container left-arrow">
          <img src="static/games/images/arrow_small_left.png" alt="arrow left"/>
        </div>

        <div className="games">
          {this.renderSelectedGames()}
        </div>

        <div className="arrow-container right-arrow">
          <img src="static/games/images/arrow_small_right.png" alt="arrow right"/>
        </div>

      </div>
    )
  }

}
export default GamePicker;
