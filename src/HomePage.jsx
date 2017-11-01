import React from 'react'
import GraphQlQueryBuilder from './util/graphql/GraphQlQueryBuilder'
import makeRequest from './util/graphql/GraphQlRequester'

import Keyboard from './components/keyboard'

class HomePage extends React.Component {

  componentDidMount(){
    const query = GraphQlQueryBuilder.getAllGamesByType("standard", ["id", "title", "type"])
    makeRequest(query)
      .then((response) => {
        console.log(response);
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
