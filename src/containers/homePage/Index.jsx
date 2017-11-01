import React from "react"
import GraphQlQueryBuilder from "./../../util/graphql/GraphQlQueryBuilder"
import makeRequest from "./../../util/graphql/GraphQlRequester"

import gameViewPages from "./gameViewPages"
import gameTypes from "./../../util/gameTypes"
import SelectorView from "./../selectorView"
import Keyboard from "./../keyboard"

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
    const query = GraphQlQueryBuilder.getAllGamesByType("standard", ["id", "title", "type"])
    makeRequest(query)
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
