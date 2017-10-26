import React from 'react'
import axios from 'axios'
import host from './../Host.js'

import css from "./HomePage.scss"

class HomePage extends React.Component {

  componentDidMount(){
    axios.get(host.route("/games"))
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
