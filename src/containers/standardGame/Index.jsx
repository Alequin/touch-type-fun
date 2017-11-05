import React from "react"

import GraphQlQuery from "./../../util/graphql/GraphQlQuery"
import Game from "./../../util/game/Game"
import Timer from './../../util/timer/Timer.js'

import StandardGameTextArea from "./../../components/standardGameTextArea"

import css from "./StandardGame.scss"
import gameBarCss from "./../../scss/GameBar.scss"

class StandardGame extends React.Component {

  constructor(props){
    super(props)
    this.onEachTick = this.onEachTick.bind(this)
    this.onStartGame = this.onStartGame.bind(this)
    this.onFinishGame = this.onFinishGame.bind(this)
    this.state = {
      game: null,
      secondsElapsed: 0,
      gameStarted: false,
      stopTimer: false
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

  onEachTick(seconds){
    console.log(seconds);
    this.setState({secondsElapsed: seconds})
  }

  onStartGame(){
    this.setState({gameStarted: true})
  }

  onFinishGame(){
    this.setState({stopTimer: true})
  }

  renderTextArea(){
    let component
    if(this.state.game){
      component = (
        <StandardGameTextArea
          text={this.state.game.body}
          onStartGame={this.onStartGame}
          onFinishGame={this.onFinishGame}/>
      )
    }else{
      component = (<div className="game-bar side-bar"></div>)
    }
    return component
  }

  render() {
    let OPTIONS = { prefix: 'seconds elapsed!', delay: 1000}
    return (
      <div className="standard-game-container">
        <div className="game-bar side-bar">
          <Timer options={OPTIONS}
            onEachTick={this.onEachTick}
            shouldTimerRun={this.state.gameStarted}
            shouldStop={this.state.stopTimer}/>
        </div>
        {this.renderTextArea()}
        <div className="game-bar side-bar"></div>
      </div>
    )
  }
}

export default StandardGame;
