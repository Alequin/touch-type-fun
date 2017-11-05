import React from "react"

import GraphQlQuery from "./../../util/graphql/GraphQlQuery"
import Game from "./../../util/game/Game"
import Timer from './../../util/timer/Timer.js'
import StringHelper from './../../util/StringHelper.js'

import StandardGameTextArea from "./../../components/standardGameTextArea"

import css from "./StandardGame.scss"
import gameBarCss from "./../../scss/GameBar.scss"

class StandardGame extends React.Component {

  constructor(props){
    super(props)
    this.onEachTick = this.onEachTick.bind(this)
    this.onStartGame = this.onStartGame.bind(this)
    this.onWrongKeyPress = this.onWrongKeyPress.bind(this)
    this.onFinishGame = this.onFinishGame.bind(this)
    this.state = {
      game: null,
      errors: 0,
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

  onWrongKeyPress(){
    const newErrorCount = this.state.errors + 1
    this.setState({errors: newErrorCount})
  }

  onFinishGame(){
    this.setState({stopTimer: true})
  }

  renderHeader(){
    let title = ""
    let difficulty = ""
    let style = {}
    if(this.state.game){
      title = StringHelper.capitalise(this.state.game.title)
      difficulty = this.state.game.difficulty
      style = {
        "textDecoration": "underline",
        "textDecorationColor": this.state.game.getDifficultColour()
      }
    }
    return (
      <div className="header-container top-bar">
        <div className="top-bar-element">
          <h2>{title}</h2>
        </div>
        <div className="top-bar-element">
          <p style={style}>Difficulty: {difficulty}</p>
        </div>
      </div>
    )
  }

  renderScoreBar(){
    let errorPercent = ""
    if(this.state.game){
      const errorsAsDecimal = this.state.errors/this.state.game.body.length
      errorPercent = Math.floor(errorsAsDecimal*100)
    }
    return (
      <div className="score-bar-container top-bar">
        <div className="top-bar-element">
          <Timer options={{delay: 1000}}
            onEachTick={this.onEachTick}
            shouldTimerRun={this.state.gameStarted}
            shouldStop={this.state.stopTimer}/>
        </div>
        <div className="top-bar-element">
          <p>WPM: 10</p>
        </div>
        <div className="top-bar-element">
          <p>Errors: {this.state.errors.toString()} ({`${errorPercent}%`})</p>
        </div>
      </div>
    )
  }

  renderGameTextArea(){
    if(this.state.game){
      return (
        <StandardGameTextArea
          text={this.state.game.body}
          onStartGame={this.onStartGame}
          onWrongKeyPress={this.onWrongKeyPress}
          onEndGame={this.onFinishGame}/>
      )
    }
  }

  render() {
    const isGameValid = this.state.game !== null
    return (
      <div className="standard-game-container">
        {this.renderHeader()}
        {this.renderScoreBar()}
        <div className="text-area-frame">
          {this.renderGameTextArea()}
        </div>
      </div>
    )
  }
}

export default StandardGame;
