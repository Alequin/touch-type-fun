import React from "react"

import GraphQlQuery from "./../../util/graphql/GraphQlQuery"
import Game from "./../../util/game/Game"

import StandardGameTextArea from "./../../components/standardGameTextArea"

import css from "./StandardGame.scss"
import gameBarCss from "./../../scss/GameBar.scss"

class StandardGame extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      game: new Game()
    }
  }

  componentDidMount(){
    const query = GraphQlQuery.getGameById(this.props.gameId, ["id", "title", "description", "body"])
    query.execute()
      .then((result) => {
        console.log(result);
        this.setState({
          game: new Game(result)
        })
      })
  }

  render() {
    return (
      <div className="standard-game-container">
        <div className="game-bar side-bar"></div>
        <StandardGameTextArea />
        <div className="game-bar side-bar"></div>
      </div>
    )
  }
}

export default StandardGame;
