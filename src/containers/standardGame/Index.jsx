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
    const fields = ["id", "title", "description", "body", "difficulty"]
    const query = GraphQlQuery.getGameById(this.props.gameId, fields)
    query.execute()
      .then((result) => {
        this.setState({
          game: new Game(result.game)
        })
      })
  }

  onEachTick(seconds){
    this.setState({secondsElapsed: seconds})
  }

  onStartGame(){
    this.setState({gameStarted: true})
  }

  onFinishGame(){
    this.setState({stopTimer: true})
  }

  renderLeftBar(isGameValid){
    if(isGameValid){
      return (
        <div className="game-bar left-bar">
          <h1>{this.state.game.title}</h1>
          <h2>{this.state.game.difficulty}</h2>
          <p>{this.state.game.description}</p>
        </div>
      )
    }else{
      return this.renderEmptyBar()
    }
  }

  renderTextArea(isGameValid){
    let component
    if(isGameValid){
      return (
        <StandardGameTextArea
          text={this.state.game.body}
          onStartGame={this.onStartGame}
          onEndGame={this.onFinishGame}/>
      )
    }else{
      return this.renderEmptyBar()
    }
  }

  renderRightBar(isGameValid){
    if(isGameValid){
      return (
        <div className="game-bar">
          <Timer options={{delay: 1000}}
            onEachTick={this.onEachTick}
            shouldTimerRun={this.state.gameStarted}
            shouldStop={this.state.stopTimer}/>
        </div>
      )
    }else{
      return this.renderEmptyBar()
    }
  }

  renderEmptyBar(){
    return (<div className="game-bar"></div>)
  }

  render() {
    const isGameValid = this.state.game !== null
    return (
      <div className="standard-game-container">
        {this.renderLeftBar(isGameValid)}
        {this.renderTextArea(isGameValid)}
        {this.renderRightBar(isGameValid)}
      </div>
    )
  }
}

export default StandardGame;
