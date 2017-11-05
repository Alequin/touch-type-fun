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
      game: null
    }
  }

  componentDidMount(){
    const query = GraphQlQuery.getGameById(this.props.gameId, ["id", "title", "description", "body"])
    query.execute()
      .then((result) => {
        this.setState({
          game: new Game(result.game)
        })
      })
  }

  renderTextArea(){
    let component
    if(this.state.game){
      component = (<StandardGameTextArea text={this.state.game.body}/>)
    }else{
      component = (<div className="game-bar side-bar"></div>)
    }
    return component
  }

  render() {
    return (
      <div className="standard-game-container">
        <div className="game-bar side-bar"></div>
        {this.renderTextArea()}
        <div className="game-bar side-bar"></div>
      </div>
    )
  }
}

export default StandardGame;
