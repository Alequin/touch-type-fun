import React from "react"
import css from "./StandardGameTextArea.scss"
import gameBarCss from "./../../scss/GameBar.scss"

class StandardGameTextArea extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      position: 0,
      textToShow:  `Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile phones, tablets, desktops/laptops, or other devices. Text messages may be sent over a cellular network, or may also be sent via an Internet connection.
The term originally referred to messages sent using the Short Message Service (SMS). It has grown beyond alphanumeric text to include multimedia messages (known as MMS) containing digital images, videos, and sound content, as well as ideograms known as emoji (happy faces ,sad faces ,and other icons).
As of 2017, text messages are used by youth and adults for personal, family and social purposes and in business. Governmental and non-governmental organizations use text messaging for communication between colleagues. As with emailing, in the 2010s, the sending of short informal messages has become an accepted part of many cultures.[1] This makes texting a quick and easy way to communicate with friends and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busy with family or work activities). Like e-mail and voice mail, and unlike calls (in which the caller hopes to speak directly with the recipient), texting does not require the caller and recipient to both be free at the same moment; this permits communication even between busy individuals. Text messages can also be used to interact with automated systems, for example, to order products or services from e-commerce websites, or to participate in online contests. Advertisers and service providers use direct text marketing to send messages to mobile users about promotions, payment due dates, and other notifications instead of using postal mail, email, or voicemail.`
    }
  }

  componentDidMount(){
    this.gameContainer = document.getElementsByClassName("game-container")[0]
    this.highlightCharAsNext(0)
    this.setOnKeyDownListener()
  }

  generateTextWithSpans(text){
    let elements = []
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
    this.gameContainer.removeChild(spanToDelete)
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
    span.style.padding = "2px";
  }

  render() {
    return (
      <div className="standard-game-text-area-frame game-bar">
        <div className="standard-game-text-area-container">
          {this.generateTextWithSpans(this.state.textToShow)}
        </div>
      </div>
    )
  }
}

export default StandardGameTextArea;
