import React from 'react'
import GraphQlQuery from "./../../util/graphql/GraphQlQuery.js"
import GamePreview from "./GamePreview.jsx"
import Game from "./../../util/game/Game.js"

import css from "./GamePicker.scss"

class GamePicker extends React.Component{

  constructor(props){
    super(props)
    this.maxGamesToShow = 3

    this.onClickLeftArrow = this.onClickLeftArrow.bind(this)
    this.onClickRightArrow = this.onClickRightArrow.bind(this)

    this.state = {
      games: [],
      gamesToShow: []
    }
  }

  componentDidMount(){
    const type = this.props.gameType
    const gameFields = ["id", "title", "description", "type", "difficulty"]
    const scoreFields = ["timeInSeconds"]
    const query = GraphQlQuery.getAllGamesByTypeWithScores(type, gameFields, scoreFields)
    query.execute()
      .then((response) => {
        const games = response.allGames.edges.map((game) => {
          return new Game(game.node)
        })
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
      <GamePreview key={game.title} width={width} game={game} onClickPlay={this.props.onClickPlay}/>
    )
  }

  renderLeftArrow(){
    if(this.state.gamesToShow[0] !== 0){
      return(
        <div className="highlighter" onClick={this.onClickLeftArrow}>
          <img src="static/games/images/arrow_small_left.png"
          alt="arrow left"/>
        </div>
      )
    }
  }

  renderRightArrow(){
    const games = this.state.games
    const gamesToShow = this.state.gamesToShow
    if(gamesToShow[gamesToShow.length-1] !== games.length-1){
      return(
        <div className="highlighter" onClick={this.onClickRightArrow}>
          <img src="static/games/images/arrow_small_right.png"
          alt="arrow right"/>
        </div>
      )
    }
  }

  onClickLeftArrow(){
    this.changeGamesToShowBy(-1)
  }

  onClickRightArrow(){
    this.changeGamesToShowBy(1)
  }

  changeGamesToShowBy(amount){
    const gamesToShow = this.state.gamesToShow.map((pointer) => {
      return pointer + amount
    })
    this.setState({gamesToShow: gamesToShow})
  }

  render(){
    return (
      <div className="game-picker-container">

        <div className="games">
          {this.renderSelectedGames()}
        </div>

        <div className="arrow-frame">
          
          <div className="arrow-container">
            {this.renderLeftArrow()}
          </div>
          <div className="arrow-container">
            {this.renderRightArrow()}
          </div>

        </div>

      </div>
    )
  }

}
export default GamePicker;
