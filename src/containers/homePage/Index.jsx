import React from "react"

import GraphQlQuery from "./../../util/graphql/GraphQlQuery"
import gameTypes from "./../../util/gameTypes"

import gameViewPages from "./gameViewPages"
import SelectorView from "./../selectorView"
import Keyboard from "./../keyboard"

import css from "./HomePage.scss"

class HomePage extends React.Component {

  constructor(props){
    super(props)
    this.renderView = this.renderView.bind(this)
    this.onClickPlay = this.onClickPlay.bind(this)

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

  renderGame(){
    switch(this.state.selectedGame.type){
      case gameTypes.STANDARD:
        return this.renderStandardGame()
    }
  }

  renderStandardGame(){

  }

  onClickPlay(game){
    console.log(game);
    console.log(game.type);
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
