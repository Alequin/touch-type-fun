import React from 'react'

import css from './Key.scss'

class Key extends React.Component {
  render() {
    return (
      <div className="key-container">
        <div class="inner-boarder">
          {this.props.letter}
        </div>
      </div>
    )
  }
}

export default Key;
