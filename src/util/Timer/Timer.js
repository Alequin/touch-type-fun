import React from 'react'
import { render } from 'react-dom'
import SecondsTohhmmss from './SecondsTohhmmss'

let offset = null, interval = null

/**
 * Timer module
 * A simple timer component.
**/
export default class Timer extends React.Component {

  constructor(props) {
    super(props)
    this.state = { clock: 0, time: '00:00:00' }
  }

  componentDidMount() {
    this.play()
  }

  componentWillUnmount() {
    this.pause()
  }

  pause() {
    if (interval) {
      clearInterval(interval)
      interval = null
    }
  }

  play() {
    if (!interval) {
      offset = Date.now()
      interval = setInterval(this.update.bind(this), this.props.options.delay)
    }
  }

  reset() {
    let clockReset = 0
    let time = SecondsTohhmmss(clockReset / 1000)
    this.setState({
      clock: clockReset,
      time: time,
    })
  }

  update() {
    let clock = this.state.clock
    clock += this.calculateOffset()
    const seconds = Math.floor(clock / 1000)
    let time = SecondsTohhmmss(seconds)
    if(this.props.onEachTick) this.props.onEachTick(seconds)
    this.setState({
      clock: clock,
      time: time
    })
  }

  calculateOffset() {
    let now = Date.now()
    let newOffset = now - offset
    offset = now
    return newOffset
  }

  render() {
    const timerStyle = {
      margin: "0px",
      padding: "2em"
    };

    const secondsStyles = {
      fontSize: "200%",
      fontWeight: "200",
      lineHeight: "1.5",
      margin: "0px",
      color: "#666"
    };

    return (
      <div style={timerStyle} className="react-timer">
        <h3 style={secondsStyles} className="seconds"> {this.state.time} {this.props.prefix}</h3>
      </div>
    )
  }
}
