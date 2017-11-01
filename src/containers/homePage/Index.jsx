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

    this.state = {
      gameView: gameViewPages.SELECTOR,
      selectedGame: {}
    }
  }

  componentDidMount(){
    const query = GraphQlQuery.getAllGamesByType("standard", ["id", "title", "type"])
    query.execute()
      .then((response) => {
        console.log(response);
      })
  }

  renderView(){
    switch(this.state.gameView){
      case gameViewPages.SELECTOR:
        return this.renderSelectorView()
      case gameViewPages.GAME:
        return this.renderGame()
    }
  }

  renderSelectorView(){
    return (
      <SelectorView />
    )
  }

  renderGame(){
    switch(this.state.selectedGame.type){
      case gameTypes.STANDARD:
        return this.renderStandardGameView()
    }
  }

  renderStandardGame(){

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
