import React from "react"

import StandardGameTextArea from "./../../components/standardGameTextArea"

import css from "./StandardGame.scss"
import gameBarCss from "./../../scss/GameBar.scss"

class StandardGame extends React.Component {
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
