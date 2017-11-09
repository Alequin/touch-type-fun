import React from "react"
import PropTypes from 'prop-types'

import GraphQlQuery from "./../../util/graphql/GraphQlQuery"
import Game from "./../../util/game/Game"
import Timer from './../../util/timer/Timer.js'
import StringHelper from './../../util/StringHelper.js'
import calcWordsPerMinute from './../../util/CalculateWordsPerMinute.js'

import StandardGameTextArea from "./../../components/standardGameTextArea"

import css from "./StandardGame.scss"
import gameBarCss from "./../../scss/GameBar.scss"

class StandardGame extends React.Component {

  constructor(props){
    super(props)
    this.onEachTick = this.onEachTick.bind(this)
    this.onStartGame = this.onStartGame.bind(this)
    this.onCorrectKeyPress = this.onCorrectKeyPress.bind(this)
    this.onWrongKeyPress = this.onWrongKeyPress.bind(this)
    this.onFinishGame = this.onFinishGame.bind(this)
    this.onClickExitButton = this.onClickExitButton.bind(this)
    this.state = {
      game: null,
      wordsPerMinute: 0,
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

  onCorrectKeyPress(totalKeysPressed){
    const wpm = calcWordsPerMinute(totalKeysPressed, this.state.secondsElapsed)
    this.setState({wordsPerMinute: wpm})
  }

  onWrongKeyPress(){
    const newErrorCount = this.state.errors + 1
    this.setState({errors: newErrorCount})
  }

  onFinishGame(){
    const id = this.state.game.id
    const seconds = this.state.secondsElapsed
    const wordsPerMinute = this.state.wordsPerMinute
    const errors = this.state.errors

    const mutation = GraphQlQuery.postNewScore(id, seconds, wordsPerMinute, errors)
    mutation.execute()
    this.setState({stopTimer: true})
  }

  onClickExitButton(){
    console.log("exit");
    this.props.exitGame()
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
          <p>WPM: {this.state.wordsPerMinute.toString()}</p>
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
          onCorrectKeyPress={this.onCorrectKeyPress}
          onWrongKeyPress={this.onWrongKeyPress}
          onEndGame={this.onFinishGame}/>
      )
    }
  }

  render() {
    const isGameValid = this.state.game !== null
    return (
      <div className="standard-game-container">
        <button className="exit-button" onClick={this.onClickExitButton}>X</button>
        {this.renderHeader()}
        {this.renderScoreBar()}
        <div className="text-area-frame">
          {this.renderGameTextArea()}
        </div>
        <p className="game-start-note">
          The game will start when the first letter is pressed
        </p>
      </div>
    )
  }
}

StandardGame.propTypes = {
  gameId: PropTypes.string,
  exitGame: PropTypes.func
};

export default StandardGame;
