import React from "react"

import GraphQlQuery from "./../../util/graphql/GraphQlQuery"
import gameTypes from "./../../util/gameTypes"

import gameViewPages from "./gameViewPages"
import SelectorView from "./../selectorView"
import Keyboard from "./../keyboard"
import StandardGame from "./../standardGame"

import css from "./HomePage.scss"

class HomePage extends React.Component {

  constructor(props){
    super(props)
    this.renderView = this.renderView.bind(this)
    this.onClickPlay = this.onClickPlay.bind(this)
    this.onExitGame = this.onExitGame.bind(this)

    this.state = {
      gameView: gameViewPages.SELECTOR,
      selectedGame: {}
    }
  }

  renderView(){
    switch(this.state.gameView){
      case gameViewPages.SELECTOR:
        return <SelectorView onClickPlay={this.onClickPlay}/>
      case gameViewPages.GAME:
        return this.renderGame()
    }
  }

  onExitGame(){
    this.setState({gameView: gameViewPages.SELECTOR})
  }

  renderGame(){
    const game = this.state.selectedGame
    switch(game.type){
      case gameTypes.STANDARD:
        return <StandardGame gameId={game.id} exitGame={this.onExitGame}/>
    }
  }

  onClickPlay(game){
    this.setState({
      gameView: gameViewPages.GAME,
      selectedGame: game
    })
  }

  render() {
    return (
      <div className="home-page-container">
        <div className="frame keyboard-frame">
          <Keyboard />
        </div>
        <div className="frame games-frame">
          {this.renderView()}
        </div>
      </div>
    )
  }
}

export default HomePage;
