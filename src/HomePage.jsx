import React from 'react'

import Keyboard from './components/keyboard'

class HomePage extends React.Component {

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
