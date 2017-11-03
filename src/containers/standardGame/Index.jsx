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
    this.gameFrame = document.getElementsByClassName("game-frame")[0]
    this.highlightCharAsNext(0)
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
    document.addEventListener('keydown', (event) => {
      const pressed = event.key
      const currentChar = this.state.textToShow.charAt(this.state.position)
      if(pressed === "Shift") return
      if(pressed !== currentChar){
        this.highlightCharAsError(this.state.position)
      }else{
        this.deleteCurrentChar()
        const nextPosition = this.state.position+1
        this.highlightCharAsNext(nextPosition)
        this.setState({position: nextPosition})
      }
    });
  }

  deleteCurrentChar(){
    const spanToDelete = document.getElementById("char-span" + this.state.position.toString())
    this.gameFrame.removeChild(spanToDelete)
  }

  highlightCharAsNext(position){
    this.highlightCharAt(position, "white", "black")
  }

  highlightCharAsError(position){
    this.highlightCharAt(position, "black", "red")
  }

  highlightCharAt(position, fontColour, backgroundColour){
    const span = document.getElementById("char-span" + position.toString())
    span.style.backgroundColor = backgroundColour
    span.style.color = fontColour
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
