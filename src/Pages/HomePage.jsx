import React from 'react'
import host from './../Host.js'

import Keyboard from './components/keyboard'
import css from "./HomePage.scss"

class HomePage extends React.Component {

  componentDidMount(){
    host.get("/games")
      .then((payload) => {
        console.log(payload);
      })
  }

  render() {
    return (
      <div className="home-page-container">
        <div className="frame keyboard-frame">
          <Keyboard />
        </div>
        <div className="frame games-frame">

        </div>
      </div>
    )
  }
}

export default HomePage;
