import React from "react"
import css from "./StandardGameTextArea.scss"
import gameBarCss from "./../../scss/GameBar.scss"

class StandardGameTextArea extends React.Component {

  constructor(props){
    super(props)
    this.keyPressEvent = this.keyPressEvent.bind(this)
    this.state = {
      position: 0,
      gameStarted: false,
      textToShow: this.props.text || ""
    }
  }

  componentDidMount(){
    this.gameContainer = document.getElementsByClassName("standard-game-text-area-container")[0]
    if(this.state.textToShow.length > 0) this.highlightCurrentCharAsNext(0)
    this.setOnKeyDownListener()
  }

  generateTextWithSpans(text){
    let elements = []
    elements.push((<span className={"wide-span"} key={-1}></span>))
    for(let j=0; j<text.length; j++){
      const id = j.toString()
      const char = text.charAt(j)
      const className = char !== " " ? "char" : "char space-char"
      elements.push(
        <span id={"char-span" + id} className={className} key={id}>{text.charAt(j)}</span>
      )
    }
    return elements
  }

  setOnKeyDownListener(){
    document.addEventListener('keydown', this.keyPressEvent);
  }

  startGame(){
    this.props.onStartGame()
    this.setState({gameStarted: true})
  }

  endGame(){
    document.removeEventListener('keydown', this.keyPressEvent)
    this.props.onEndGame()
  }

  keyPressEvent(){
    if(!this.state.gameStarted) this.startGame()
    this.onKeyPress(event.key)
  }

  onKeyPress(pressed){
    const currentChar = this.state.textToShow.charAt(this.state.position)
    if(pressed === "Shift") return
    if(pressed === currentChar){
      this.onCorrectKeyPress()
    }else{
      this.highlightCurrentCharAsError(this.state.position)
    }
  }

  onCorrectKeyPress(){
    this.deleteCurrentChar()
    const nextPosition = this.state.position+1
    if(nextPosition >= this.state.textToShow.length){
      this.endGame()
    }else{
      this.highlightCurrentCharAsNext(nextPosition)
    }
    this.setState({position: nextPosition})
  }

  deleteCurrentChar(){
    const spanToDelete = document.getElementById("char-span" + this.state.position.toString())
    this.gameContainer.removeChild(spanToDelete)
  }

  highlightCurrentCharAsNext(position){
    this.highlightCharAt(position, "white", "black")
  }

  highlightCurrentCharAsError(position){
    this.highlightCharAt(position, "black", "red")
  }

  highlightCharAt(position, fontColour, backgroundColour){
    const span = document.getElementById("char-span" + position.toString())
    span.style.backgroundColor = backgroundColour
    span.style.color = fontColour
    span.style.padding = "2px";
  }

  render() {
    return (
      <div className="standard-game-text-area-frame">
        <div className="standard-game-text-area-container">
          {this.generateTextWithSpans(this.state.textToShow)}
        </div>
      </div>
    )
  }
}

export default StandardGameTextArea;
