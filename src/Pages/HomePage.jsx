import React from 'react'
import host from './../Host.js'

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

      </div>
    )
  }
}

export default HomePage;
