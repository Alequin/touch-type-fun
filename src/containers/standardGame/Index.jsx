import React from "react"
import css from "./StandardGame.scss"

class StandardGame extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      position: 0,
      textToShow:  "Text messaging, or texting Text messaging, or texting Text messaging, or texting Text messaging, or texting"
    }
  }

  componentDidMount(){
    this.setOnKeyDownListener()
  }

  generateTextWithSpans(text){
    let elements = []
    for(let j=0; j<text.length; j++){
      const id = j.toString()
      elements.push(
        <span id={"char-span" + id} className="char" key={id}>{text.charAt(j)}</span>
      )
    }
    return elements
  }

  setOnKeyDownListener(){
    const gameFrame = document.getElementsByClassName("game-frame")[0]
    document.addEventListener('keydown', (event) => {
      const span = document.getElementById("char-span" + this.state.position.toString())
      this.setState({position: ++this.state.position})
    });
  }

  render() {
    return (
      <div className="standard-game-container">
        <div className="game-bar side-bar"></div>
        <div className="game-bar game-frame">
          {this.generateTextWithSpans(this.state.textToShow)}
        </div>
        <div className="game-bar side-bar"></div>
      </div>
    )
  }
}

export default StandardGame;
