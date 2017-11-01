import React from 'react'

import Keyboard from './components/keyboard'

class HomePage extends React.Component {

  componentDidMount(){
    const query = `query{
                      allGames{
                        edges{
                          node{
                            id
                            title
                          }
                        }
                      }
                    }`
    fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query:  query}),
    }).then((response) => {
      return response.json()
    }).then((json) => {
      console.log(json.data);
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
